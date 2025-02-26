"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"; // Small-screen version

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {isLargeScreen ? (
        <>
          {/* Animation only for Desktop */}
          <div className="hidden md:block">
            <Animation />
          </div>

          <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-1/3">
                <Menu />
              </div>
              <div className="md:w-2/3 flex justify-center items-start mt-[70px] md:mt-[200px] md:ml-[-50px]">
                <Head 
                  imageSrc="/images/Rajnil Malviya.jpeg" 
                  title="Multimedia Coordinator" 
                  name="Rajnil Malviya" 
                  rollNo="ee23btech11051" 
                  bgColor="bg-[#B0C4DE]" 
                  textColor="text-[#1E456E]" 
                />
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
