import React from 'react'
import { title } from '../primitives'
import CustomCard from '../customCard'

import ref440 from '../../public/ref440.jpg';
import ref512 from '../../public/ref512.jpg';
import ref520 from '../../public/ref520.jpg';
import ref530 from '../../public/ref530.jpg';
import ref541 from '../../public/ref541.jpg';
import ref455 from '../../public/ref455.jpg';


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
    imagem: ref541,
    titulo: 'Kit 3 pecas',
    descricao: 'Bandana, malha',
    tamanho: 'P , M , G ',
    referencia: 541,
  },
  {
    id: 4,
    imagem: ref455,
    titulo: 'Conjunto Body',
    descricao: 'Manga Curta c/Short , cores claras',
    tamanho: 'P , M , G ',
    referencia: 455,
  }]
export default function NovidadesContainer() {
  return (
    <div className='w-full flex flex-col gap-2 my-8'>
      <h2 className={title({ size: "sm" })} >Novidades</h2>

      <div className="w-full  h-[4px] mb-8  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent "><div></div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {
          produtos.map((produto) => (
            <CustomCard
              key={produto.id}
              imagem={produto.imagem}
              titulo={produto.titulo}
              descricao={produto.descricao}
              tamanho={produto.tamanho}
              referencia={produto.referencia}
            />
          ))
        }
       

      </div>
    </div>
  )
}
