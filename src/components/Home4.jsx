"use client";
import React from "react";
import CardCarousel from "./CardCarousel";
import Wave from "./WaveAnimation";

const SpeakersSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 h-[100vh] p-10 mb-10">
      {/* Past Speakers Section */}
      <div className="w-full md:w-1/2 text-center flex flex-col justify-between">
        <div className="absolute flex flex-col top-0 left-0 mb-[80px]">
          <Wave/>
        </div>
        <h2 className="relative mb-12 text-4xl font-bold text-[#0C223F] drop-shadow-lg">PAST SPEAKERS</h2>
        <CardCarousel/>
      </div>
      
      {/* Upcoming Talks Section */}
      <div className="w-full md:w-1/2 text-center flex flex-col justify-between">
        <CardCarousel/>
        <h2 className="relative mt-[413px] text-4xl font-bold text-[#0C223F] drop-shadow-lg">UPCOMING TALKS</h2>
        <div className="absolute mt-[737px] flex flex-col right-0 rotate-180">
          <Wave color="#5373A6"/>
        </div>
      </div>

      {/* <div className="w-full md:w-1/2 text-center">
        <div>
          <CardCarousel/>
          <h2 className="text-4xl font-bold text-[#0C223F] drop-shadow-lg">Upcoming Talks</h2>
        </div>
        <div className="absolute flex flex-col bottom-0 right-0 rotate-180">
          <Wave color="#5373A6"/>
        </div>
      </div> */}
    </div>
  );
};

export default SpeakersSection;
