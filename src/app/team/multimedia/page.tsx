import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head";

import Navbar from "../../../components/Navbar";
export default function Home() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Animation only for Desktop */}
      <div className="hidden md:block">
        <Animation />
      </div>
      <div className="flex flex-col">
      <Navbar/>
      <div className="flex flex-row">
      <Menu />

      <Head 
        imageSrc="/images/Rajnil Malviya.jpeg" 
        title="Multimedia Coordinator" 
        name="Rajnil Malviya" 
        rollNo="ee23btech11051" 
        bgColor="bg-[#B0C4DE]" 
       positionClass="absolute top-[180px] left-[60%] -translate-x-1/2 
            max-md:top-[100px] max-md:left-[50%] max-md:-translate-x-1/2"
        textColor="text-[#1E456E]" 
      />
    </div>
    </div>
    </div> 
  );
}
