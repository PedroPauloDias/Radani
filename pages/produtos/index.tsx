import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ref440 from '../../public/ref440.jpg';
import ref512 from '../../public/ref512.jpg';
import ref520 from '../../public/ref520.jpg';
import ref530 from '../../public/ref530.jpg';
import ref541 from '../../public/ref541.jpg';
import ref455 from '../../public/ref455.jpg';
import CustomCard from "@/components/customCard";
import Link from "next/link";



const produtos = [
  {
    id: 1,
    imagem: ref440,
    titulo: 'Kit 5 peças',
    descricao: 'Colete , Body , Luva ,Touca , Mijão s/pé , cores claras',
    tamanho: 'Unico',
    referencia: 440,
  },
  {
    id: 2,
    imagem: ref520,
    titulo: 'Conjunto Body',
    descricao: 'Manga Comprida , C/Bandana , estamp ,Mijao , Mijão s/pé , cores claras',
    tamanho: 'P , M , G ',
    referencia: 520,
  },
  {
    id: 3,
    imagem: ref530,
    titulo: 'Conjunto Body',
    descricao: 'Canelado , Estamp , Mijao Canelado Liso , Cores claras',
    tamanho: 'P , M , G ',
    referencia: 530,
  },
  {
    id: 4,
    imagem: ref512,
    titulo: 'Conjunto Body',
    descricao: 'Manga Curta c/Bandana , tecido , short',
    tamanho: 'P , M , G ',
    referencia: 512,
  },
  {
    id: 5,
    imagem: ref455,
    titulo: 'Conjunto Body',
    descricao: 'Manga Curta c/Short , cores claras',
    tamanho: 'P , M , G ',
    referencia: 455,
  },
  {
    id: 6,
    imagem: ref541,
    titulo: 'Kit 3 pecas',
    descricao: 'Bandana, malha',
    tamanho: 'P , M , G ',
    referencia: 541,
  }
]
export default function Produtos() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className='m-8'>Todos os Produtos </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {produtos.map((produto) => (
            <Link href={`/produtos/${produto.id}` } key={produto.id}>
              <CustomCard
                key={produto.id}
                imagem={produto.imagem}
                titulo={produto.titulo}
                descricao={produto.descricao}
                tamanho={produto.tamanho}
                referencia={produto.referencia}
              />
            </Link>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
