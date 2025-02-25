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
    </div> 
  );
}
