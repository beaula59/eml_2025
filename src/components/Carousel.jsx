"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/images/home/carousel/img1.JPG",
  "/images/home/carousel/img2.jpg",
  "/images/home/carousel/img3.png",
  "/images/home/carousel/img4.jpg",
  "/images/home/carousel/img5.jpg",
  "/images/home/carousel/img6.jpg",
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
    <div className="relative w-screen md:w-[90vw] lg:w-[80vw] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh]">
      {/* Embla Carousel */}
      <div className="overflow-hidden w-screen md:w-[90vw] lg:w-[80vw] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh]" ref={emblaRef}>
        <div className="flex relative">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-none w-screen md:w-[90vw] lg:w-[80vw] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center relative"
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
            className={`w-2 h-2 rounded-full transition duration-300 ${activeIndex === index ? "bg-black scale-125" : "bg-gray-400"
              }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;