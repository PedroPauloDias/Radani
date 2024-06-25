import React from 'react'
import { Card, CardHeader, CardBody, } from "@nextui-org/react";
import Banner from '../../public/banner1.png';
import ref440 from '../../public/ref440.jpg';
import  Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";

export default function CustomCard({imagem, titulo, descricao, tamanho, referencia  }) {
  return (
          <Card className="py-4">
            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{titulo}</h4>
        <p className="text-tiny uppercase font-bold">{descricao }</p>
              <small className="text-default-500">{referencia}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="w-full object-cover rounded-xl  "
                src={imagem}
                width={270}
        />
        <button
          className='flex gap-4 text-lg items-center text-center justify-end' >ver mais <LuMoveRight />
        </button>
        
            </CardBody>
          </Card>

  )
}
