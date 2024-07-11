import React, { useEffect, useRef, useState } from "react";
import { getSearchProduct } from "@/services/productServices";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Footer } from "../components/footer/index";
import SearchResultComponent from "../components/SearchResult/index";
import MyPagination from "@/components/myPagination";
import CustomCard from "@/components/customCard";
import CustomSkeleton from "@/components/skeleton";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";

export default function DefaultLayout({ children }) {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(""); // Estado para armazenar a query de busca

  const topRef = useRef(null);

  // Função para lidar com a busca de produtos


  const handleSearch = async (query, page) => {
    try {
      setLoading(true);
      const response = await getSearchProduct(query, page);
      console.log("Resposta da busca:", response);

      setSearchResults(response.produtos);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
      setLoading(false);

      // Scroll para o topo da página após a busca
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
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


  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <div  className="w-full lg:flex items-center  ">
        <Navbar onSearch={handleSearch} >
        <Input
        type="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar nº REF. ou Nome"
        endContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
            className="min-w-[100px] w-full p-2"
        >
        </Input>
      </Navbar>
   
        </div>

      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {searchResults ? (
          <>
            <div ref={topRef}></div> {/* Ref para scrollIntoView */}
            <SearchResultComponent
              produtos={searchResults}
              loading={loading}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
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





