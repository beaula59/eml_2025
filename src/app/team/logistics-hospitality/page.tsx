"use client"; // Needed for client-side rendering

import Menu from "../../../components/menu";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Animation from "../../../components/animation";
import Navbar from "../../../components/Navbar"
const coordinators = [
  { imageSrc: "/images/Sanjay M.jpg", title: "Coordinator", name: "Sanjay M", rollNo: "ic23btech11018" },
  { imageSrc: "/images/Kodadala Jagadeesh.png", title: "Coordinator", name: "Kodadala Jagadeesh", rollNo: "ai23btech11012" },
  { imageSrc: "/images/Nikita Tuwani.jpg", title: "Coordinator", name: "Nikita Tuwani", rollNo: "cy24mscst11016" },
  { imageSrc: "/images/Akkala Sai Nihal.jpg", title: "Coordinator", name: "Akkala Sai Nihal", rollNo: "bm24btech11003" },
  { imageSrc: "/images/Kotala Manisha.jpg", title: "Coordinator", name: "Manisha Koatala", rollNo: "ms23btech11013" },
  { imageSrc: "/images/Sujan Rada.jpg", title: "Coordinator", name: "Sujan Rada", rollNo: "ee23btech11219" },
  { imageSrc: "/images/Poludasu Srivastav.jpg", title: "Coordinator", name: "Poludasu Srivastav", rollNo: "bt23btech11019" },
  { imageSrc: "/images/Kharatmol Harshitha.jpg", title: "Coordinator", name: "Kharatmol Harshitha", rollNo: "bm23btech11011" }
];

export default function DesignPR() {
  return (
    <div className="w-full min-h-screen relative bg-white flex flex-col items-center overflow-hidden">

      {/* Animation only for Desktop */}
      <div className="hidden md:block">
        <Animation />
      </div>
    <div className="flex flex-col">
    <Navbar/>
    <div className="flex flex-row">
    <Menu />

    {/* Head + Coordinators in a Column */}
      <div className="flex flex-col mt-[50] ml-[350]">

    <Head 
        imageSrc="/images/Jilhewar Nahoosh Manoj.jpg" 
        title="Logistics and Hospitality" 
        name="Jilhewar Nahoosh Manoj" 
        rollNo="ce22btech11025"
        bgColor="bg-[#1D4F7C]" 
        positionClass=""
      />

      {/* Coordinators Section */}
      <div className="flex flex-col items-start mt-7">
        {/* First Row of Coordinators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coordinators.slice(0, 4).map((coordinator, i) => (
            <Coordinator key={i} {...coordinator} />
          ))}
        </div>

        {/* Second Row of Coordinators (Shifted Right for Staggered Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 ml-[90]">
          {coordinators.slice(4).map((coordinator, i) => (
            <Coordinator key={i + 4} {...coordinator} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
   );
  }
