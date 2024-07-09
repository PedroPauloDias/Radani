import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductsByTag } from '../../../services/categoryService';
import CustomSkeleton from '@/components/skeleton';
import CustomCard from '@/components/customCard';
import DefaultLayout from '@/layouts/default';
import MyPagination from '../../../components/myPagination';

export default function Categoria() {
  const router = useRouter();
  const { id } = router.query;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchCategoriesByTag(page) {
      try {
        setLoading(true);
        const response = await getProductsByTag(id, page);
        console.log("Categoria:", response);

        setCategories(response.produtos);
        setTotalPages(response.totalPages);
        setCurrentPage(response.currentPage);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setError(error); // Define o erro capturado para exibir na interface
        setLoading(false);
      }
    }
    
    fetchCategoriesByTag(currentPage); // Inicial carga com a página atual

  }, [id, currentPage]); // Atualização base de dados aos utilizando assim useCallback

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber); // Atualiza currentPage ao mudar de página
  }

  return (
    <DefaultLayout>
      <div className='w-full flex flex-col gap-2 my-8'>
        <h2 className='text-3xl font-semibold mb-2 '> {id}</h2>
        <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            // Renderiza o esqueleto enquanto está carregando
            <CustomSkeleton />
          ) : error ? (
            // Exibe mensagem de erro se houver um erro
            <div>Erro ao carregar categorias: {error.message}</div>
          ) : (
            categories.map(category => (
              <CustomCard
                key={category.id}
                imagem={category.image}
                titulo={category.name}
                cores={category.cores}
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
      <MyPagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </DefaultLayout>
  );
}
