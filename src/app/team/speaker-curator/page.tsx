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
        imageSrc="/images/Soumik Roy.jpeg" 
        title="Speaker Curator Head" 
        name="Soumik Roy" 
        rollNo="bt23mtech11010" 
        bgColor="bg-[#1E456E]" 
        positionClass="absolute top-[120px] left-[60%] -translate-x-1/2"
        />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 absolute top-[250px] left-[400px] mt-10 w-[800px] h-[300px] p-5">
          <Coordinator imageSrc="/images/Harshita Bansal.jpg" title="Coordinator" name="Harshita Bansal" rollNo="bt24mtech11015" />
          <Coordinator imageSrc="/images/Aastha .jpg" title="Coordinator" name="Aastha" rollNo="co23btech11001" />
          <Coordinator imageSrc="/images/Somani Ankita.jpg" title="Coordinator" name="Ankita Somani" rollNo="bm23btech11022" />
          <Coordinator imageSrc="/images/Aryan Raj.jpg" title="Coordinator" name="Aryan Raj" rollNo="bt23btech11004" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 absolute top-[400px] left-[500px] mt-10 w-[800px] h-[300px] p-5">
          <Coordinator imageSrc="/images/Renuka Sonawane.jpg" title="Coordinator" name="Renuka Sonawane" rollNo="mp24mscst14006" />
          <Coordinator imageSrc="/images/Shreya Sridhar.JPG" title="Coordinator" name="Shreya Sridhar" rollNo="ic22btech11015" />
          <Coordinator imageSrc="/images/Om Ajay Godse.jpg" title="Coordinator" name="Om Godse" rollNo="me23btech11045" />
          {/* <Coordinator imageSrc="/images/design-head.jpg" title="Coordinator 4" name="." rollNo="." /> */}
        </div>


      </div>
    );
  }