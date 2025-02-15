import Animation from "../components/animation";
import Menu from "../components/menu";
import Head from "../components/head";

export default function Home() {
  return (
    <div className="bg-white min-h-screen relative">
      <Animation />
      <Menu/>

      <Head 
        imageSrc="/images/Rajnil Malviya.jpeg" 
        title="Multimedia Coordinator" 
        name="Rajnil Malviya" 
        rollNo="ee23btech11051" 
        bgColor="bg-[#B0C4DE]" 
        positionClass="absolute top-[220px] left-[60%] -translate-x-1/2"
        textColor="text-[#1E456E]" 

        />
      </div>
  );
}

