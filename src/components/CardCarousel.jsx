import { useState, useEffect, useCallback } from "react";

const ChevronIcon = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
    />
  </svg>
);

const PlayPauseIcon = ({ isPlaying }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    {isPlaying ? (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
      </>
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
    )}
  </svg>
);

const ImageCardCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % data.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + data.length) % data.length);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') setIsPlaying(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-full max-w-3xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + data.length) % data.length;
            const slide = data[index];
            const position = offset === 0 ? 'center' : offset === -1 ? 'left' : 'right';

            return (
              <div
                key={slide.id}
                className={`absolute w-[43%] left-1/2 transition-all duration-500 ease-in-out transform -translate-x-1/2
                  ${position === 'center'
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-40 scale-90 z-0 cursor-pointer'
                  }
                  ${position === 'left' ? '-translate-x-[120%]' : ''}
                  ${position === 'right' ? 'translate-x-[20%]' : ''}`}
                onClick={() => position !== 'center' && (position === 'left' ? prevSlide() : nextSlide())}
              >
                <div className="bg-blue-200 shadow-lg overflow-hidden h-[19rem] md:h-[22rem]">
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-[10rem] mt-5 mx-auto object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400?text=Image+Error';
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-[.9rem] md:text-l font-bold text-gray-800 mb-2 font-[lora]">
                      {slide.title}
                    </h3>
                    <p className="text-[.7rem] md:text-[0.9rem] text-gray-600 font-[lora]">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronIcon direction="left" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label="Next slide"
        >
          <ChevronIcon direction="right" />
        </button> */}

        {/* <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <PlayPauseIcon isPlaying={isPlaying} />
        </button> */}
      </div>
    </div>
  );
};

export default ImageCardCarousel;