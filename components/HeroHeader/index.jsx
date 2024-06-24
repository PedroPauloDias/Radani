import React from 'react'
import Image from 'next/image'
import banner1 from '../../public/banner1.png'

export default function HeroHeader()  {
  return (
    <Image src={banner1} alt="Descrição da imagem" width={1400} height={600} className='rounded-2xl ' />
  )
}
