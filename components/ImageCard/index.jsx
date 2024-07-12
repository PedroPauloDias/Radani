import React, { useState } from 'react';
import Image from 'next/image';
import CustomSkeleton from '../skeleton';
export default function ImageCard({imagens , loading}) {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

  if (loading) {
    return <CustomSkeleton />;
  }


  return (
    <div className="slider-container w-full  mx-auto relative  ">
      <div className="flex justify-center items-center w-full">
        <Image
          src={imagemPrincipal}
          alt="Imagem Principal"
          width={500}
          height={300}
          className="w-auto h-auto  rounded-md  md:w-[98%]  lg:rounded-md"
        />
      </div>
      <div className="thumbnails flex justify-center mt-4">
        {imagens.map((imagem, index) => (
          <button
            key={index}
            className="cursor-pointer m-1 border-2 border-transparent "
            onClick={() => setImagemPrincipal(imagem)}
          >
            <Image
              src={imagem}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={60}
              className="object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
}