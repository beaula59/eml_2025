"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Menu from "../../../components/menu";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Animation from "../../../components/animation";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page";

const coordinators = [
  { imageSrc: "/images/Sanjay M.jpg", title: "Coordinator", name: "Sanjay M", rollNo: "ic23btech11018" },
  { imageSrc: "/images/Kodadala Jagadeesh.png", title: "Coordinator", name: "Kodadala Jagadeesh", rollNo: "ai23btech11012" },
  { imageSrc: "/images/Nikita Tuwani.jpg", title: "Coordinator", name: "Nikita Tuwani", rollNo: "cy24mscst11016" },
  { imageSrc: "/images/Akkala Sai Nihal.jpg", title: "Coordinator", name: "Akkala Sai Nihal", rollNo: "bm24btech11003" },
  { imageSrc: "/images/Kotala Manisha.jpg", title: "Coordinator", name: "Kotala Manisha", rollNo: "ms23btech11013" },
  { imageSrc: "/images/Sujan Rada.jpg", title: "Coordinator", name: "Sujan Rada", rollNo: "ee23btech11219" },
  { imageSrc: "/images/Poludasu Srivastav.jpg", title: "Coordinator", name: "Poludasu Srivastav", rollNo: "bt23btech11019" },
  { imageSrc: "/images/Kharatmol Harshitha.jpg", title: "Coordinator", name: "Kharatmol Harshitha", rollNo: "bm23btech11011" }
];

export default function LogisticsAndHospitality() {
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
          {/* Animation (Only for Desktop) */}
          <div className="hidden md:block w-full">
            <Animation />
          </div>

          <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-row">
              <Menu />

              {/* Head + Coordinators Section */}
              <div className="flex flex-col justify-start items-start w-full max-w-5xl gap-10 mt-[70px] ml-[350px]">
                {/* Head Section */}
                <Head 
                  imageSrc="/images/Jilhewar Nahoosh Manoj.jpg" 
                  title="Logistics and Hospitality" 
                  name="Jilhewar Nahoosh Manoj" 
                  rollNo="ce22btech11025" 
                  bgColor="bg-[#1D4F7C]" 
                />

                {/* Coordinators Section */}
                <div className="flex flex-col items-start -mt-2">
                  {/* First Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {coordinators.slice(0, 4).map((coordinator, i) => (
                      <Coordinator key={i} {...coordinator} />
                    ))}
                  </div>

                  {/* Second Row (Shifted Right) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 items-center">
                    {coordinators.slice(4).map((coordinator, i) => (
                      <Coordinator key={i + 4} {...coordinator} />
                    ))}
                  </div>
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
