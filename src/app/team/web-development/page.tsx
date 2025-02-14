import Animation from "../components/animation";
import Menu from "../components/menu";
import Head from "../components/head"
import Coordinator from "../components/coordinator"

export default function DesignPR() {
    return (
      <div className="w-full h-screen bg-white overflow-hidden">
        <Animation />
        <Menu/>
        <Head 
        imageSrc="/images/design-head.jpg" 
        title="Design and PR Head" 
        name=" . " 
        rollNo="co22btech11008"
        bgColor="bg-[#1E456E]" 
        positionClass="absolute top-[120px] left-[60%] -translate-x-1/2"
      />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 absolute top-[270px] left-[400px] mt-10 w-[800px] h-[300px] p-5">
          <Coordinator imageSrc="/images/design-head.jpg" title="Coordinator 1" name="." rollNo="." />
          <Coordinator imageSrc="/images/design-head.jpg" title="Coordinator 2" name="." rollNo="." />
          <Coordinator imageSrc="/images/design-head.jpg" title="Coordinator 3" name="." rollNo="." />
          <Coordinator imageSrc="/images/design-head.jpg" title="Coordinator 4" name="." rollNo="." />
        </div>


      </div>
    );
  }