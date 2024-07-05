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
      <CardHeader className="pb-2 pt-2 px-4 flex-col items-start my-1">
        <h4 className="font-bold text-large my-1">{titulo}</h4>
        <small className="text-default-500 my-1">ref: {referencia}</small>
      </CardHeader>
      <CardBody className="overflow-visible  ">
        <Image
          alt="Card background"
          className="w-full object-cover rounded-xl  "
          src={imagem}
          width={270}
          height={300}
          loading='lazy'

        />
       
        <CustomModal className='' modalTitle={modalTitle}>
          
          <Card className="py-4 ">
            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
            <Image
                alt="Card background"
                className="w-full object-cover rounded-xl  "
                src={imagem}
                width={270}
                height={270}
                loading='lazy'

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
