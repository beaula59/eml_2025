import Animation from "../components/animation";
import Menu from "../components/menu";
import Head from "../components/head";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Animation />
      <Menu/>

      <Head 
        imageSrc="/images/design-head.jpg" 
        title="Design and PR Head" 
        name=" . " 
        rollNo="co22btech11008" 
        bgColor="bg-[#B0C4DE]" 
        positionClass="absolute top-[220px] left-[60%] -translate-x-1/2"
        textColor="text-[#1E456E]" 

        />
      </div>
  );
}
