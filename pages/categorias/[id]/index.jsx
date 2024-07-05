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
                      imagem={category.image}
                      titulo={category.name}
                      descricao={category.description}
                      tamanho={category.sizes}
                      referencia={category.ref}
                      tag={category.tag}
                      descButton='ver mais'
                      classe='tag'
                      id={category.tag}
                      modalTitle={'Detalhes do ' + category.name}
                      loading={loading}
                      cod={category.cod}
                    />
                  ))
                )}
              </div>
            </div>
          </DefaultLayout>
          )
}

