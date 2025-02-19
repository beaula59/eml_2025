"use client"; // Needed for client-side rendering

import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";

const coordinators = [
  { imageSrc: "/images/Parthib Ghosh.jpg", title: "Coordinator", name: "Parthib Ghosh", rollNo: "co22btech11007" },
  { imageSrc: "/images/Sachin Dev.jpg", title: "Coordinator", name: "Sachin Dev", rollNo: "bt23mtech11007" },
  { imageSrc: "/images/Kankariya Aditya Rajesh.jpg", title: "Coordinator", name: "Kankariya Aditya", rollNo: "bt23btech11011" },
  { imageSrc: "/images/Ashuthosh Shivaraj.jpg", title: "Coordinator", name: "Ashuthosh Shivaraj", rollNo: "me23btech11011" },
];

export default function DesignPR() {
  return (
    <div className="w-full min-h-screen relative bg-white flex flex-col items-center overflow-hidden">
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
              imageSrc="/images/Aditya.jpg"
              title="Design and PR Head"
              name="Aditya Barwaye"
              rollNo="co22btech11002"
              bgColor="bg-[#1D4F7C]"
            />
            
            {/* Coordinators Section */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
              {coordinators.map((coordinator, i) => (
                <Coordinator key={i} {...coordinator} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
