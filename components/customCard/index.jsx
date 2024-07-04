import React from 'react'
import { Card, CardHeader, CardBody, } from "@nextui-org/react";

import Image from 'next/image';
import CustomModal from '../CustomModal';
import CustomSkeleton from '../skeleton';

export default function CustomCard({ imagem, titulo, descricao, tamanho, cod , referencia, descButton, classe, id ,modalTitle,loading}) {

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
        />
       
        <CustomModal className='' modalTitle={modalTitle}>
          
          <Card className="py-4 dark:bg-zinc-800">
            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
            <Image
                alt="Card background"
                className="w-full object-cover rounded-xl  "
                src={imagem}
                width={270}
                height={270}
              />
             
    
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-5">
            <div className='flex flex-col gap-2'>
              <p className="font-bold text-large">Nome: {titulo}</p>
              <p className="text-tiny  font-bold">Descrição: {descricao}</p>
              <p className="text-tiny  font-bold">tamanho: {tamanho}</p>
              <p className="text-tiny  font-bold">nº de referencia: {referencia}</p>
                <small className="text-default-500">Código: {cod}</small>
              </div>
            </CardBody>
          </Card>
        </CustomModal>
      </CardBody>
    </Card>

  )
}
