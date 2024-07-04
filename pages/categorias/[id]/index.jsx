import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getAllCategories, getProductsByTag } from '../../../services/categoryService';
import CustomSkeleton from '@/components/skeleton';
import CustomCard from '@/components/customCard';
import DefaultLayout from '@/layouts/default';

export default function Categoria() {

  const router = useRouter();
  const { id } = router.query;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(id)

  useEffect(() => {
    async function fetchCategoriesByTag() {
      try {
        const response = await getProductsByTag(id);
        console.log("Categoria:", response);
        setCategories(response);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setLoading(false);
      }
    }
    fetchCategoriesByTag();
  }, [categories]);

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
              <h2 className='text-3xl font-semibold mb-2 '> {id}</h2>
              <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {loading ? (
                  // Renderiza o esqueleto enquanto está carregando
                  <CustomSkeleton />
                ) : (
                  // Mapeia os produtos para exibir os cards
                  categories.map(category => (
                    <CustomCard
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
          )
}

