'use client'
import React, { useEffect, useState } from 'react';

export default function CustomCarousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = React.Children.toArray(children).map((child, index) => ({
    id: index,
    content: child,
  }));

  const intervalRef = React.useRef(null);
  const autoplayDelay = 3000; // Tempo em milissegundos entre cada slide

  // Iniciar autoplay quando o componente montar
  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, []);

  // Função para iniciar autoplay
  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoplayDelay);
  };

  // Função para parar autoplay
  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

   // Resetar o intervalo quando o slide for alterado manualmente
   useEffect(() => {
    stopAutoplay();
    startAutoplay();
  }, [currentSlide]);

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-xl">
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full z-10 hover:bg-[#85adb5]">
        &#10094;
      </button>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex justify-center items-center bg-gray-300 text-2xl ">
            {slide.content}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white
       p-2 rounded-full z-10 hover:bg-[#85adb5]">
        &#10095;
      </button>
    </div>
  );
}
