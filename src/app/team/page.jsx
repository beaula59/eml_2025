"use client";

import { useState, useEffect } from 'react';
import Animation from "../../components/animation";
import Menu from "../../components/menu";
import Overall from "../../components/Overall";
import Teambutton from "../../components/team-button";
import Navbar from "../../components/Navbar";
import Head from "../../components/head"
import Coordinator from "../../components/coordinator";

const coordinators = [
  { imageSrc: "/images/Parthib Ghosh.jpg", title: "Coordinator", name: "Parthib Ghosh", rollNo: "co22btech11007" },
  { imageSrc: "/images/Sachin Dev.jpg", title: "Coordinator", name: "Sachin Dev", rollNo: "bt23mtech11007" },
  { imageSrc: "/images/Kankariya Aditya Rajesh.jpg", title: "Coordinator", name: "Kankariya Aditya", rollNo: "bt23btech11011" },
  { imageSrc: "/images/Ashuthosh Shivaraj.jpg", title: "Coordinator", name: "Ashuthosh Shivaraj", rollNo: "me23btech11011" },
  { imageSrc: "/images/Harshita Bansal.jpg", title: "Coordinator", name: "Harshita Bansal", rollNo: "bt24mtech11015" },
  { imageSrc: "/images/Aastha .jpg", title: "Coordinator", name: "Aastha", rollNo: "co23btech11001" },
  { imageSrc: "/images/Somani Ankita.jpg", title: "Coordinator", name: "Ankita Somani", rollNo: "bm23btech11022" },
  { imageSrc: "/images/Aryan Raj.jpg", title: "Coordinator", name: "Aryan Raj", rollNo: "bt23btech11004" },
  { imageSrc: "/images/Renuka Sonawane.jpg", title: "Coordinator", name: "Renuka Sonawane", rollNo: "mp24mscst14006" },
  { imageSrc: "/images/Shreya Sridhar.JPG", title: "Coordinator", name: "Shreya Sridhar", rollNo: "ic22btech11015" },
  { imageSrc: "/images/Om Ajay Godse.jpg", title: "Coordinator", name: "Om Godse", rollNo: "me23btech11045" },
  { imageSrc: "/images/Sanjay M.jpg", title: "Coordinator", name: "Sanjay M", rollNo: "ic23btech11018" },
  { imageSrc: "/images/Kodadala Jagadeesh.png", title: "Coordinator", name: "K Jagadeesh", rollNo: "ai23btech11012" },
  { imageSrc: "/images/Nikita Tuwani.jpg", title: "Coordinator", name: "Nikita Tuwani", rollNo: "cy24mscst11016" },
  { imageSrc: "/images/Akkala Sai Nihal.jpg", title: "Coordinator", name: "Akkala Sai Nihal", rollNo: "bm24btech11003" },
  { imageSrc: "/images/Kotala Manisha.jpg", title: "Coordinator", name: "Kotala Manisha", rollNo: "ms23btech11013" },
  { imageSrc: "/images/Sujan Rada.jpg", title: "Coordinator", name: "Sujan Rada", rollNo: "ee23btech11219" },
  { imageSrc: "/images/Poludasu Srivastav.jpg", title: "Coordinator", name: "Poludasu Srivastav", rollNo: "bt23btech11019" },
  { imageSrc: "/images/Kharatmol Harshitha.jpg", title: "Coordinator", name: "K Harshitha", rollNo: "bm23btech11011" },
  { imageSrc: "/images/Krishna Kumar.jpg", title: "Coordinator", name: "Krishna Kumar", rollNo: "em23mtech11006" },
  { imageSrc: "/images/Namagiri Tejasri.jpg", title: "Coordinator", name: "Namagiri Tejasri", rollNo: "ep23btech11018" },
  { imageSrc: "/images/Bhavitha.jpeg", title: "Coordinator", name: "Kakkirala Bhavitha", rollNo: "co22btech11005" },
  { imageSrc: "/images/Vasana Manas.jpg", title: "Coordinator", name: "Vasana Manas", rollNo: "ee23btech11062" },

];
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
        <>
        {/* <div className="hidden sm:block w-full">
            <Animation />
        </div> */}
        <div className='flex flex-col gap-10 items-center'>
          <Navbar />
          <Teambutton text="Team 2024-2025" backgroundColor="bg-[#0c223f]"/>
          <Overall/>
          
          <Teambutton text="Design and PR" backgroundColor="bg-[#0c223f]"/>
          <div className='flex flex-col mt-4 items-center'>
            <Head
              imageSrc="/images/Aditya.jpg"
              title="Design and PR Head"
              name="Aditya Barwaye"
              rollNo="co22btech11002"
              bgColor="bg-[#1D4F7C]"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
              {coordinators.slice(0, 4).map((coordinator, i) => (
                <Coordinator key={i} {...coordinator} />
              ))}
              {[...Array(2)].map((_, i) => (
                <div key={`placeholder-design-${i}`} className="hidden sm:block" />
              ))}
            </div>
          </div>
          
          <Teambutton text="Speaker Curator" backgroundColor="bg-[#0c223f]"/> 
          <div className="flex flex-col mt-4 items-center">
            <Head 
              imageSrc="/images/Soumik Roy.jpeg" 
              title="Speaker Curator Head" 
              name="Soumik Roy" 
              rollNo="bt23mtech11010" 
              bgColor="bg-[#1D4F7C]"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
              {coordinators.slice(4, 11).map((coordinator, i) => (
                <Coordinator key={i} {...coordinator} />
              ))}
              {[...Array(3)].map((_, i) => (
                <div key={`placeholder-speaker-${i}`} className="hidden sm:block" />
              ))}
            </div>
          </div>
              <Teambutton text="Logistics & Hospi" backgroundColor="bg-[#0c223f]"/>
              <div className="flex flex-col mt-4 items-center">
              <Head 
              imageSrc="/images/Jilhewar Nahoosh Manoj.jpg" 
              title="Logistics and Hospitality Head" 
              name="Jilhewar Nahoosh Manoj" 
              rollNo="ce22btech11025" 
              bgColor="bg-[#1D4F7C]" 
            />
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
              {coordinators.slice(11, 19).map((coordinator, i) => (
                <Coordinator key={i} {...coordinator} />
              ))}
              {[...Array(3)].map((_, i) => (
                <div key={`placeholder-speaker-${i}`} className="hidden sm:block" />
              ))}
            </div> 
          </div>
          <Teambutton text="Web-Development" backgroundColor="bg-[#0c223f]"/>
            <div className="flex flex-col mt-4 items-center">
            <Head
              imageSrc="/images/Beaula Mahima V.jpeg"
              title="Web Development Head"
              name="Beaula Mahima V"
              rollNo="ma21btech11002"
              bgColor="bg-[#1D4F7C]"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
              {coordinators.slice(19, 23).map((coordinator, i) => (
                <Coordinator key={i} {...coordinator} />
              ))}
              {[...Array(3)].map((_, i) => (
                <div key={`placeholder-speaker-${i}`} className="hidden sm:block" />
              ))}
            </div>
              
            </div>
            <Teambutton text="Multimedia" backgroundColor="bg-[#0c223f]"/> 
            <div className="md:w-2/3 flex justify-center items-start mb-5 mt-3">
            <Head 
              imageSrc="/images/Rajnil Malviya.jpeg" 
              title="Multimedia Coordinator" 
              name="Rajnil Malviya" 
              rollNo="ee23btech11051" 
              bgColor="bg-[#B0C4DE]" 
              textColor="text-[#1E456E]" 
            />
            <div></div>
            </div>
        </div>
        </>
      )}
    </div>
  );
}

