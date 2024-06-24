import React from 'react';
import { title } from '@/components/primitives';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Banner from '../../public/banner1.png';
import CustomCard from '../customCard/index';
export default function ProdutosContainer() {
  return (
       <div className='w-full flex flex-col gap-2 my-8'>
          <h2 className={title({size:"sm"  }) } >Produtos</h2>
       
      <div className="w-full  h-[4px] mb-8  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent "><div></div></div>      
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Produtos */}
        <CustomCard />
        <CustomCard />
        <CustomCard />        
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
    </div>
    </div>
  )
}
