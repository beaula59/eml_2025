"use client";

import React, { useState, useEffect } from "react";
import SpeakerList from "../../components/SpeakerList";
import SpeakerCard from "../../components/SpeakerCard";
// import SpeakerPile from "../../components/SpeakerPile";
import MobileSpeakerList from "../../components/MobileSpeakerList";
import speakers from "../../../public/speakers.json";
import Navbar from "../../components/Navbar";
import "./Speakers.css";

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heights = [
    "h-[100px]",
    "h-[80px]",
    "h-[60px]",
    "h-[90px]",
    "h-[70px]",
    "h-[80px]",
    "h-[60px]",
    "h-[90px]",
    "h-[60px]",
    "h-[80px]",
    "h-[60px]",
    "h-[70px]",
    "h-[100px]",
    "h-[60px]",
    "h-[90px]",
    "h-[70px]",
  ];
  const colors = [
    "bg-[#1D4F7C]",
    "bg-[#DBDCDE]",
    "bg-[#DF231D]",
    "bg-[#5373A6]",
    "bg-[#E1E5E8]",
    "bg-[#DF231D]",
    "bg-[#E1E5E8]",
    "bg-[#5373A6]",
    "bg-[#ACC8E2]",
    "bg-[#E1E5E8]",
    "bg-[#DF231D]",
    "bg-[#E1E5E8]",
    "bg-[#1D4F7C]",
    "bg-[#D9D9D9]",
    "bg-[#DF231D]",
    "bg-[#1D4F7C]",
  ];
  // const circleColors = [
  //   "bg-[#1D4F7C]",
  //   "bg-[#D9D9D9]",
  //   "bg-[#DF231D]",
  //   "bg-[#1D4F7C]",
  //   "bg-[#ACC8E2]",
  // ];

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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white font-[lora]">
      <Navbar />

      {/* <div className="mt-[85px]"> */}
      <div className="hidden laptop:block">
        <div className="absolute left-0 top-[65px] flex">
          {[...Array(14)].map((_, i) => (
            <div
              key={`top-left-${i}`}
              className={`animate-wave-top ${heights[i]} ${colors[i]} w-[50px] rounded-b-[150px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : "20px",
              }}
            />
          ))}
          {/* {[...Array(5)].map((_, i) => (
            <div
              key={`top-left-${i + 12}`}
              className={`w-[40px] h-[40px] ${circleColors[i]} rounded-full ml-4`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : "20px",
              }}
            />
          ))} */}
        </div>
        <div className="flex">
          {/* {[...Array(5)].map((_, i) => (
            <div
              key={`bottom-right-${i}`}
              className={`w-[40px] h-[40px] ${circleColors[i]} rounded-full ml-4`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : "20px",
              }}
            />
          ))} */}
          {[...Array(14)].map((_, i) => (
            <div
              key={`bottom-right-${i}`}
              className={`absolute animate-wave-bottom bottom-0 right-0 ${heights[i]} ${colors[i]} w-[50px] rounded-t-[100px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginRight: i === 0 ? "0" : `${i * 70}px`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex-grow flex flex-col laptop:flex-row items-start justify-center gap-2 laptop:overflow-hidden my-[40px]">
        <div className="flex flex-col items-center justify-start w-full h-full laptop:mt-10">
          <SpeakerCard speaker={speakers[currentIndex]} bgIndex={bgIndex} />
          {/* <div className="hidden laptop:flex items-start w-full h-full">
            <SpeakerPile
              speakers={speakers}
              currentIndex={currentIndex}
              bgIndex={bgIndex}
            />
          </div> */}
        </div>
        <div className="hidden laptop:block w-1/3 h-full">
          <SpeakerList
            speakers={speakers}
            currentIndex={currentIndex}
            setCurrentIndex={handleSpeakerClick}
          />
        </div>
        <div className="laptop:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-10 right-10 bg-[#0C223F] text-white p-2 rounded-full z-50 mt-10"
          >
            {isMobileMenuOpen ? "Close" : "Speakers Menu"}
          </button>
          <MobileSpeakerList
            speakers={speakers}
            currentIndex={currentIndex}
            setCurrentIndex={handleSpeakerClick}
            isOpen={isMobileMenuOpen}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Speakers;
