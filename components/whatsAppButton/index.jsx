import React from 'react'
import { ImWhatsapp } from "react-icons/im";

export default function WhatsAppButton() {
  return (
    <div className=''>
      <div className='rounded-full   bg-green-500 motion-safe:animate-bounce " focus:animate-none hover:animate-none  text-md  p-3  tracking-wide '>        
        <a href=" https://wa.me/" target='_blank'>
        <ImWhatsapp size={20} />
        </a>
      </div>
    </div>
  )
}

