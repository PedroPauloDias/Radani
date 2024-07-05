'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardBody, } from "@nextui-org/react";

import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";
import { useRouter } from 'next/navigation'
import CustomModal from '../CustomModal';
import CustomSkeleton from '../skeleton';

export default function DisplayCard({ imagem, titulo, descricao, tag , tamanho, referencia, descButton, classe, id , loading }) {
  const router = useRouter()

  const handleClick = () => {
    if (classe === 'id') {
      router.push(`produtos/${id}`);
    } if (classe === 'tag') {
      router.push(`categorias/${tag}`);
    }
  };

  if (loading) {
    return <CustomSkeleton />; 
  }

  

  return (
    <Card className="py-4">
      <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{titulo}</h4>
        <p className="text-tiny uppercase font-bold">{descricao}</p>
        <small className="text-default-500">{referencia}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="w-full object-cover rounded-xl  "
          src={imagem}
          width={270}
          height={270}
          loading='lazy'
        />
        <button onClick={handleClick}
          className='flex items-center justify-end mt-2 gap-2'>
          ver mais
          <LuMoveRight className='mt-1' />
        </button>
       
        

      </CardBody>
    </Card>

  )
}
