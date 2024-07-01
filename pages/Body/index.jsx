import React from 'react'
import DefaultLayout from '../../layouts/default';
import { title } from '@/components/primitives';

export default function Body() {
  return (
    <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block w-full text-center justify-center">
          
        <h2 className=  'w-full text-4xl mb-4'>Todos os Bodys</h2> 

<div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5]  to-[#ee9c2e]"></div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>

          </div>
      </section>
    </DefaultLayout>
  )
}
