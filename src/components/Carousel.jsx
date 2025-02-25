"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://plus.unsplash.com/premium_photo-1693181640721-33d8e1e0ca92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1692007370455-cafc274e0796?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1693000473130-1f174de51f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const AUTOPLAY_INTERVAL = 3000;

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, AUTOPLAY_INTERVAL);
  }, [emblaApi]);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
      emblaApi.on("pointerDown", stopAutoplay);
      emblaApi.on("pointerUp", startAutoplay);
    }
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay]);

  return (
    <div className="relative w-full h-screen">
      {/* Embla Carousel */}
      <div className="overflow-hidden w-full h-screen" ref={emblaRef}>
        <div className="flex relative">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-none w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-[#FFFFFF] opacity-60"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              activeIndex === index ? "bg-black scale-125" : "bg-gray-400"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


