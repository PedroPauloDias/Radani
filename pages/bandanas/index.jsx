'use client'
import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/default';
import { getProductsByTag } from '../../services/productServices';
import CustomCard from '../../components/customCard/index';
import { title } from '@/components/primitives';

export default function BandanasPage() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    async function fetchCategoriesByTag() {
      try {
        const response = await getProductsByTag('bandanas');
        console.log("Categoria:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    fetchCategoriesByTag();
  }, []);

 

  return (
    <DefaultLayout>
    <> 
    <div className='w-full flex flex-col gap-2 my-8'>
      <h2 className={title({ size: "sm" })}>Todos as Bandanas</h2>

      <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                <CustomCard
                  key={category.id}
                  imagem={ category.image}
                  titulo={category.name}
                  descricao={category.description}
                  tamanho=''
                  referencia={category.ref}
                  descButton='ver mais'
                  classe='id'
                    id={category.id}
                    modalTitle={'Detalhes do ' + category.name}

                />
              ))}
            </div>
          </div>

        
    </>
    </DefaultLayout>
  )
}
