import React, { useEffect, useState } from 'react';
import { title } from '@/components/primitives';
import { getAllCategories } from '../../services/categoryService';
import DisplayCard from '../DisplayCard/index';
import CustomSkeleton from '../skeleton'; // Importe o esqueleto de carregamento

export default function CategoriasContainer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getAllCategories();
        console.log("Categorias correta:", response.data);
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className='w-full flex flex-col gap-2 my-8'>
      <h2 className={title({ size: "sm" })}>Categorias</h2>
      <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          // Renderiza o esqueleto enquanto está carregando
          <CustomSkeleton />
        ) : (
          // Mapeia as categorias para exibir os cards
          categories.map(category => (
            <DisplayCard 
              key={category.id}
              imagem={'data:image/png;base64,' + category.image}
              titulo={category.name}
              descButton='Ver todos'
              descricao=''
              tamanho=''
              referencia=''
            />
          ))
        )}
      </div>
    </div>
  );
}
