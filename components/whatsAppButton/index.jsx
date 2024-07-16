import React from 'react'
import { ImWhatsapp } from "react-icons/im";

export default function WhatsAppButton() {
  return (
    <div className=''>
      <div className='rounded-full   relative bg-green-500 motion-safe:animate-bounce " focus:animate-none hover:animate-none  text-md  p-2  tracking-wide '>        
        <a href=" https://wa.me/55015997303095?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target='_blank'>
        <ImWhatsapp size={25} />
        </a>
      </div>
    </div>
  )
}