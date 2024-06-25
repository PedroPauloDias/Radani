import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/default';
import ref440 from '../../../public/ref440.jpg';
import ref512 from '../../../public/ref512.jpg';
import ref520 from '../../../public/ref520.jpg';
import ref530 from '../../../public/ref530.jpg';
import ref541 from '../../../public/ref541.jpg';
import ref455 from '../../../public/ref455.jpg';
import  Image  from 'next/image';

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
];

export default function ProdutoIndividual() {
  const router = useRouter();
  const { id } = router.query; // Obtém o id do produto da URL

  // Encontra o produto pelo id
  const produto = produtos.find((p) => p.id === parseInt(id));

  // Se o produto não existir, mostra mensagem de "Produto não encontrado"
  if (!produto) {
    return (
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center py-8 md:py-10">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        </div>
      </DefaultLayout>
    );
  }

  // Renderiza os detalhes do produto encontrado
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center py-8 md:py-10">
        <Image src={produto.imagem} alt={produto.titulo} className="max-w-lg"  />
        <h1 className="text-2xl font-bold">{produto.titulo}</h1>
        <p>{produto.descricao}</p>
        <p>Tamanho: {produto.tamanho}</p>
        <p>Referência: {produto.referencia}</p>
      </div>
    </DefaultLayout>
  );
}
