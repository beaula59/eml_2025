"use client";

import React, { useState, useEffect } from "react";
import SpeakerList from "../components/SpeakerList";
import SpeakerCard from "../components/SpeakerCard";
import SpeakerPile from "../components/SpeakerPile";
import speakers from "../../public/speakers.json";

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
      setBgIndex((prevBgIndex) => (prevBgIndex + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSpeakerClick = (index) => {
    setCurrentIndex(index);
    setBgIndex(index % 6);
  };

  return (
    <div className="relative min-h-screen bg-white font-[lora]">
      <div className="h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center h-1/2 p-4 gap-8">
          <SpeakerCard speaker={speakers[currentIndex]} bgIndex={bgIndex} />
          <SpeakerList
            speakers={speakers}
            currentIndex={currentIndex}
            setCurrentIndex={handleSpeakerClick}
          />
        </div>
        <div className="w-full flex justify-center mt-8">
          <SpeakerPile
            speakers={speakers}
            currentIndex={currentIndex}
            bgIndex={bgIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
