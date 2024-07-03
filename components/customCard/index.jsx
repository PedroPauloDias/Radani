'use client'
import React from 'react'
import { Card, CardHeader, CardBody, } from "@nextui-org/react";
import Banner from '../../public/banner1.png';
import ref440 from '../../public/ref440.jpg';
import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";
import { useRouter } from 'next/navigation'
import CustomModal from '../CustomModal';

export default function CustomCard({ imagem, titulo, descricao, tamanho, referencia, descButton, classe, id ,modalTitle}) {

  const router = useRouter()

  const handleClick = () => {
    if (classe === 'id') {
      router.push(`produtos/${id}`);
    } else {
      router.push(`/${titulo}`);
    }
  };

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
        />
       
        <CustomModal className='' modalTitle={modalTitle}>
          
          <Card className="py-4 bg-zinc-800">
            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
              <div className='flex flex-col gap-2'>
              <p className="font-bold text-large">Nome: {titulo}</p>
              <p className="text-tiny  font-bold">Descrição: {descricao}</p>
              <p className="text-tiny  font-bold">tamanho: {descricao}</p>
              <p className="text-tiny  font-bold">nº de referencia: {referencia}</p>
              <small className="text-default-500">Código: 5468461681861</small>
              </div>
    
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="w-full object-cover rounded-xl  "
                src={imagem}
                width={270}
                height={270}
              />
            </CardBody>
          </Card>
        </CustomModal>

      </CardBody>
    </Card>

  )
}
