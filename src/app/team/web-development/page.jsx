"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"; // Small-screen version

const coordinators = [
  { imageSrc: "/images/Krishna Kumar.jpg", title: "Coordinator", name: "Krishna Kumar", rollNo: "em23mtech11006" },
  { imageSrc: "/images/Namagiri Tejasri.jpg", title: "Coordinator", name: "Namagiri Tejasri", rollNo: "ep23btech11018" },
  { imageSrc: "/images/Bhavitha.jpeg", title: "Coordinator", name: "Kakkirala Bhavitha", rollNo: "co22btech11005" },
  { imageSrc: "/images/Vasana Manas.jpg", title: "Coordinator", name: "Vasana Manas", rollNo: "ee23btech11062" },
];

export default function WebDevelopment() {
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
    <div className="w-full min-h-screen relative bg-white flex flex-col items-center overflow-hidden">
      {isLargeScreen ? (
        <>
          {/* Animation */}
          <div className="hidden md:block w-full">
            <Animation />
          </div>

          <div className="flex flex-col">
            <Navbar />

            {/* Responsive Layout */}
            <div className="flex flex-col md:flex-row w-full">
              <Menu />

              {/* Head + Coordinators as a Column, Aligned Left */}
              <div className="flex flex-col justify-start items-center md:items-start w-full max-w-5xl gap-10 mt-[70px] md:ml-[350px] px-4">
                {/* Head Section */}
                <Head
                  imageSrc="/images/Beaula Mahima V.jpeg"
                  title="Web Development Head"
                  name="Beaula Mahima V"
                  rollNo="ma21btech11002"
                  bgColor="bg-[#1D4F7C]"
                />

                {/* Coordinators Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  {coordinators.map((coordinator, i) => (
                    <Coordinator key={i} {...coordinator} />
                  ))}
                </div>
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
