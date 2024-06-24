import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/logoRadani.png'

export const Footer = () => {
  return (
    <footer  className=" flex flex-col items-center justify-center py-3  ">
      <div className="w-full flex items-center justify-around px-60 py-12 bg-foreground ">
      <div>
        <Image alt="Logo" src={logo} width={300} height={300} />
      </div>
      <div className='text-foreground-50'>
          <h2 className='text-2xl'>Redes Sociais</h2>
          <p>Facebook</p>
          <p>instagram</p>
          <p>X (antigo twitter)</p>
          <p>youtube</p>
        </div>

     
      <div className=' text-foreground-50'>
        <p>Rua João rosa de oliveira, 59</p>
        <p>Porangaba-SP </p>
        <p>Cep: 18.260-000</p>
        <p>Telefone: (15) 3257-1286</p>
        <p>CNPJ: 96.201.785/0001-30</p>
        </div>
        </div>
      <Link
        isExternal
        className="flex flex-row items-center gap-1 text-current "
        href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
        title="nextui.org homepage"
      >
        

        <div className='w-full flex flex-row items-center justify-center gap-2'>
        <span className="text-default-600">Desenvolvido por </span>
        <p className="text-default-500">Pedro Dias</p>
          <p className="text-default-600">@ Todos os direitos reservados</p>
        </div>
      </Link>
    </footer>
  )
}
