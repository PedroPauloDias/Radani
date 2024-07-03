import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/default';
import { getProductsById } from '../../../services/productServices';
import { useEffect, useState } from 'react';
import CustomCard from './../../../components/customCard/index';

export default function ProdutoIndividual() {
  const router = useRouter();
  const { id } = router.query;
  const [produtos, setProdutos] = useState([]); // Inicializa como um array vazio
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      if (id) {
        try {
          const produtoData = await getProductsById(id);
          console.log("produtoData:", produtoData.data);
          setProdutos([produtoData.data]); // Armazena o produto em um array
        } catch (err) {
          setError('Erro ao buscar produto');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduto();
  }, [id]);

  useEffect(() => {
    // Função para converter base64 para imagem
    const base64ToImage = (base64String) => {
      if (typeof window !== 'undefined') {
        const img = new Image();
        img.src = base64String;
        img.onload = () => {
          console.log('Imagem carregada:', img.width, img.height);
          // Aqui você pode manipular a imagem após carregar, se necessário
        };
        img.onerror = (error) => {
          console.error('Erro ao carregar imagem:', error);
        };
      }
    };

    // Executa base64ToImage para cada produto quando o estado produtos é atualizado
    produtos.forEach((produto) => {
      base64ToImage('data:image/png;base64,' + produto.image);
    });
  }, [produtos]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!produtos || produtos.length === 0) {
    return <div>Produto não foi encontrado</div>;
  }

  return (
    <DefaultLayout>
      {produtos.map((produto) => (
        <> 
     <h1 className='w-full text-3xl mb-4'>{produto.name} </h1>
     <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5]   to-[#ee9c2e]"></div>    
        <CustomCard
          
          imagem={'data:image/png;base64,' + produto.image}
          titulo={produto.name}
          descricao={produto.description}
          tamanho={produto.tamanho}
          referencia={produto.ref}
          descButton='ver mais'
          classe='id'
          id={produto._id}
          />
          
          </>
      ))}
    </DefaultLayout>
  );
}
