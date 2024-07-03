import React, { useEffect, useState } from 'react';
import { title } from '@/components/primitives';
import { getAllCategories } from '../../services/categoryService';
import CustomCard from '../customCard';
import Link from 'next/link';
import DisplayCard from './../DisplayCard/index';

export default function Categorias() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getAllCategories();
        console.log("Categorias:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
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
    categories.forEach(category => {
      base64ToImage(category.image); // Executa apenas no cliente
    });
  }, [categories]);

  return (
    <div className='w-full flex flex-col gap-2 my-8'>
      <h2 className={title({ size: "sm" })}>Categorias</h2>

      <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Mapeia as categorias para exibi-las */}
        {categories.map(category => (
          <div key={category.id} >
              <DisplayCard 
                key={category.id}
                imagem={'data:image/png;base64,' + category.image}
                titulo={category.name}
                descButton='Ver todos '
                descricao=''
                tamanho=''
                referencia=''
              />
          </div>
        ))}
      </div>
    </div>
  );
}
