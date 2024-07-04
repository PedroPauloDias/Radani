'use client'
import DefaultLayout from "@/layouts/default";
import CustomCard from "@/components/CustomCard";
import { useEffect, useState } from "react";
import { getAllProducts } from '../../services/productServices';
import { title } from "@/components/primitives";

export default function Produtos() {
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getAllProducts();
        console.log("Produtos:", response.data);
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    fetchProducts();
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
    produtos.forEach(produto => {
      base64ToImage(produto.image); // Executa apenas no cliente
    });
  }, [produtos]);


  return (
    <DefaultLayout>
         <div className='w-full flex flex-col gap-2 my-8'>
         <h2   className={title({ size: "sm" })} >Todos os Produtos </h2>
          <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5]   to-[#ee9c2e]"></div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {produtos.map((produto) => (

              <CustomCard
                key={produto.id}
                imagem={'data:image/png;base64,' + produto.image}
                titulo={produto.name}
                descricao={produto.description}
                tamanho={produto.tamanho}
                referencia={produto.ref}
                descButton='ver mais'
                classe='id'
                id={produto.id}
                modalTitle={'Detalhes do ' + produto.name}

              />
            ))}
          </div>
        </div>
    </DefaultLayout>
  );
}
