import { useEffect, useState } from 'react';
import DefaultLayout from '@/layouts/default';
import Image from 'next/image';
import { getProductsById } from '../../../services/productServices';
import { useRouter } from 'next/router';
export default function DetalhesDoProduto() {
  const router = useRouter();
  const { id } = router.query; 
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const productData = await getProductsById(id);
          console.log("productData:", productData.data);
          setProduct(productData); 
        } catch (err) {
          setError('Erro ao buscar produto');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct(); 
    }
  }, [id]); 

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Produto não foi encontrado</div>;
  }

  return (
    <DefaultLayout>
      <h2>Visualização individual</h2>
      <div className="flex flex-col items-center justify-center py-8 md:py-10">
        <Image src={product.imagem} alt={product.titulo} className="max-w-lg" width={500} height={500} />
        <h1 className="text-2xl font-bold">{product.titulo}</h1>
        <p>{product.descricao}</p>
        <p>Tamanho: {product.tamanho}</p>
        <p>Referência: {product.referencia}</p>
      </div>
    </DefaultLayout>
  );
}
