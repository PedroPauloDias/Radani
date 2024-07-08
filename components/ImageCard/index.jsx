import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// Importe suas imagens como você fez anteriormente
import ref440 from '../../public/ref440.jpg';
import ref512 from '../../public/ref512.jpg';
import ref520 from '../../public/ref520.jpg';
import ref530 from '../../public/ref530.jpg';
import ref541 from '../../public/ref541.jpg';
import ref455 from '../../public/ref455.jpg';

// Defina as imagens
const imagens = [ref440,  ref520, ref530, ref541, ref455];

export default function ImageCard({imagens}) {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

  const settings = {
    customPaging: function (i) {
      return (
        <div className="cursor-pointer m-1 border-2 border-transparent hover:border-none" onClick={() => setImagemPrincipal(imagens[i])}>
          <Image
            src={imagens[i]}
            alt={`Thumbnail ${i + 1}`}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      );
    },
  };

  return (
    <div className="slider-container w-full max-w-3xl mx-auto relative">
        <div className="flex justify-center items-center">
          <Image {...settings}
            src={imagemPrincipal}
            alt="Imagem Principal"
            width={500}
            height={300}
            className="w-auto h-auto rounded-md"
          />
        </div>
      <div className="thumbnails flex justify-center mt-4">
        {imagens.map((imagem, index) => (
          <div className="cursor-pointer m-1 border-2 border-transparent hover:border-none " key={index} onClick={() => setImagemPrincipal(imagem)}>
            <Image
              src={imagem}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={60}
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
