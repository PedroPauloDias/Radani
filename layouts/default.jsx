import React, { useEffect, useRef, useState } from "react";
import { getSearchProduct } from "@/services/productServices";
import { Head } from "./head";
import { Footer } from "../components/footer/index";
import SearchResultComponent from "../components/SearchResult/index";
import MyPagination from "@/components/myPagination";
import CustomCard from "@/components/customCard";
import CustomSkeleton from "@/components/skeleton";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }) {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(""); // Estado para armazenar a query de busca
  const [menuOpen, setMenuOpen] = useState(false)



  const handleSearch = async (query, page) => {
    try {
      setLoading(true);
      const response = await getSearchProduct(query, page);
      console.log("Resposta da busca:", response);

      setSearchResults(response.produtos);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
      setLoading(false);

  
    } catch (error) {
      console.error("Erro ao buscar Produtos:", error);
      setSearchResults(null);
      setLoading(false);
    }
  };

  // Efeito para realizar a busca inicial e atualizar ao mudar a página ou a query
  useEffect(() => {
    // Verifica se há uma query válida antes de realizar a busca
    if (query) {
      handleSearch(query, currentPage);
    }
  }, [query, currentPage]); // Executa sempre que query ou currentPage mudar

  // Função para mudar a página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    if (query.length >= 1) {
      setMenuOpen(menuOpen);
    } if (query.length < 1) {
      setSearchResults(null);
    } else {
      setMenuOpen(false);
    }
  }, [query]);



  


  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar onSearch={handleSearch} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="flex items-center justify-end mr-8 lg:flex    ">
        <Input
          onFocus={() => setMenuOpen(true)}
          type="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar nº REF. / Nome"
          endContent={
            <SearchIcon className="text-sm text-default-400 pointer-events-none flex-shrink-0" />
          }
          className='max-w-sm  w-2/6 min-w-36 xl:mr-[300px] '
        />

      </div>

      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {searchResults ? (
          <>
            <SearchResultComponent
              produtos={searchResults}
              loading={loading}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              setSearchResults={setSearchResults}
              setQuery={setQuery}
            />
            <div className="my-8">
              {/* Renderiza o componente de paginação se houver mais de uma página */}
              {totalPages > 1 && (
                <div>
                  <MyPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
              )}
            </div>
          </>
        ) : (
          children
        )}
      </main>
      <div className="container mx-auto max-w-7xl">
        <Footer />
      </div>
    </div>
  );
}





