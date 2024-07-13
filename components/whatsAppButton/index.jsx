import React from 'react'
import { ImWhatsapp } from "react-icons/im";

export default function WhatsAppButton() {
  return (
    <div className='flex gap-2  z-50  justify-end fixed right-80 top-[850] cursor-pointer'>
      <div className='rounded-full   bg-green-500 motion-safe:animate-bounce " focus:animate-none hover:animate-none inline-flex text-md  p-2  tracking-wide '>
        <ImWhatsapp size={30} />
      </div>
    </div>
  )
}

