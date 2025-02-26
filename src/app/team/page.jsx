"use client";

import { useState, useEffect } from 'react';
import Animation from "../../components/animation";
import Menu from "../../components/menu";
import Overall from "../../components/Overall";
import Teambutton from "../../components/team-button";
import Navbar from "../../components/Navbar";
import Ss from "./ss/page"; 

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
      {isLargeScreen ? (
        <>
          <div className="hidden md:block w-full">
            <Animation />
          </div>
          <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-row md:flex-row w-full">
              <div className="md:w-1/4 flex-shrink-0">
                <Menu />
              </div>
              <div className="md:w-3/4 flex flex-col gap-8 mt-[70px] ml-[150px]">
                <Teambutton text="Team 2024-2025" backgroundColor="bg-[#0c223f] z-[0]"/>
                <Overall />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Ss />
      )}
    </div>
  );
}
