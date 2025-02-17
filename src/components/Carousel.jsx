"use client";
import React, { useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Animation from '../components/HeroAnimation';
const images = [
  "https://plus.unsplash.com/premium_photo-1693181640721-33d8e1e0ca92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1692007370455-cafc274e0796?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1693000473130-1f174de51f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const AUTOPLAY_INTERVAL = 3000; // Change slide every 3 seconds

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay Functionality
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay(); // Clear existing interval
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
      emblaApi.on("pointerDown", stopAutoplay); // Stop autoplay on user interaction
      emblaApi.on("pointerUp", startAutoplay);  // Resume autoplay when released
    }
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay]);

  return (
    <div className="overflow-hidden w-full h-screen" ref={emblaRef}>
      <div className="flex">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-none w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#FFFFFF] opacity-60">
              {/* Animation Section */}
            <div className="absolute mx-auto flex justify-center items-center top-0 w-full">
                <Animation />
              </div>
            </div>
            <div className="h-screen flex items-center justify-center text-white text-4xl font-bold relative top-20 z-10">
              <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center bg-[#FFFFFF] text-primary font-playfair italic font-normal">
                  <h1 className="text-medium">
                    "We, the Extra Mural Lectures team at IIT Hyderabad,
                  </h1>
                  <p className="mt-0 mb-4 text-small">
                    work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives."
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
