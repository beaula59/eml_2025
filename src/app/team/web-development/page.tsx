"use client"; // Needed for client-side rendering

import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar"
const coordinators = [
  { imageSrc: "/images/Krishna Kumar.jpg", title: "Coordinator", name: "Krishna Kumar", rollNo: "em23mtech11006" },
  { imageSrc: "/images/Namagiri Tejasri.jpg", title: "Coordinator", name: "Namagiri Tejasri", rollNo: "ep23btech11018" },
  { imageSrc: "/images/Bhavitha.jpeg", title: "Coordinator", name: "Kakkirala Bhavitha", rollNo: "co22btech11005" },
  { imageSrc: "/images/Vasana Manas.jpg", title: "Coordinator", name: "Vasana Manas", rollNo: "ee23btech11062" },
];

export default function DesignPR() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-white flex flex-col items-center">

      {/* Animation (Only for Desktop) */}
      <div className="hidden md:block w-full">
        <Animation />
      </div>
      <div className="flex flex-col">
      <Navbar/>
      <div className="flex flex-row">
      <Menu />

      {/* Head + Coordinators Section (Aligned Left) */}
      <div className="flex flex-col justify-start items-start w-full max-w-5xl gap-10 mt-[70] ml-[350]">
        {/* Head Section */}
        <Head 
          imageSrc="/images/Beaula Mahima V.jpeg" 
          title="Web Development" 
          name="Beaula Mahima V" 
          rollNo="ma21btech11002"
          bgColor="bg-[#1D4F7C]" 
          positionClass=""
        />

        {/* Desktop: Coordinators in Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coordinators.map((coordinator, i) => (
            <Coordinator key={i} {...coordinator} />
          ))}
        </div>

        {/* Mobile: Scrollable List */}
        <div className="md:hidden flex flex-col gap-6 overflow-y-auto w-[300px] h-[190px]">
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
