import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../services/categoryService';
import  DefaultLayout  from '@/layouts/default';
import  CustomSkeleton from '@/components/skeleton';
import  CustomCard  from '@/components/customCard';
import DisplayCard from './../../components/DisplayCard/index';

export default function CategoriasPage()  {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getAllCategories();
        console.log("Categorias correta:", response.data);
        setCategories(response.data);
        var formattedString = (response.data.name);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

    
  function base64ToImage(base64String) {
    if (typeof window !== 'undefined') {
      const img = new Image();
      img.src = 'data:image/png;base64,' + base64String;
      img.onload = () => {
        console.log('Imagem carregada:', img.width, img.height);
        // Aqui você pode manipular a imagem após carregar, se necessário
      };
      img.onerror = (error) => {
        console.error('Erro ao carregar imagem:', error);
      };
    }
  }

  useEffect(() => {
    // Verifica se categories é um array antes de tentar iterar sobre ele
    if (Array.isArray(categories) && categories.length > 0) {
      categories.forEach(category => {
        base64ToImage(category.image); // Executa apenas no cliente
      });
    }
  }, [categories]);



  return (
    <DefaultLayout>
      <div className='w-full flex flex-col gap-2 my-8'>
        <h2 className='text-3xl font-semibold'>Todas as Categorias</h2>
        <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            // Renderiza o esqueleto enquanto está carregando
            <CustomSkeleton />
          ) : (
            // Mapeia os produtos para exibir os cards
            categories.map(category => (
              <DisplayCard
                key={category.id}
                imagem={'data:image/png;base64,' + category.image}
                titulo={category.name}
                descricao={category.description}
                tamanho={category.tamanho}
                referencia={category.ref}
                tag={category.tag}
                descButton='ver mais'
                classe='tag'
              id={category.tag}
              modalTitle={'Detalhes do ' + category.name}
              loading={loading}
            />
          ))
        )}
        </div>
      </div>
    </DefaultLayout>
  );
}

