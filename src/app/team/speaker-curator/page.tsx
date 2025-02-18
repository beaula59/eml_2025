import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head"
import Coordinator from "../../../components/coordinator"
import Navbar from "../../../components/Navbar"

const coordinators = [
  { imageSrc: "/images/Harshita Bansal.jpg", title: "Coordinator", name: "Harshita Bansal", rollNo: "bt24mtech11015" },
  { imageSrc: "/images/Aastha .jpg", title: "Coordinator", name: "Aastha", rollNo: "co23btech11001" },
  { imageSrc: "/images/Somani Ankita.jpg", title: "Coordinator", name: "Ankita Somani", rollNo: "bm23btech11022" },
  { imageSrc: "/images/Aryan Raj.jpg", title: "Coordinator", name: "Aryan Raj", rollNo: "bt23btech11004" },
  { imageSrc: "/images/Renuka Sonawane.jpg", title: "Coordinator", name: "Renuka Sonawane", rollNo: "mp24mscst14006" },
  { imageSrc: "/images/Shreya Sridhar.JPG", title: "Coordinator", name: "Shreya Sridhar", rollNo: "ic22btech11015" },
  { imageSrc: "/images/Om Ajay Godse.jpg", title: "Coordinator", name: "Om Godse", rollNo: "me23btech11045" }
];

export default function DesignPR() {
  return (
    <div className="w-full min-h-screen relative bg-white flex flex-col items-center overflow-hidden">
      <div className="hidden md:block">
        <Animation />
      </div>
      <div className="flex flex-col">
      <Navbar/>
      <div className="flex flex-row">
        <Menu />
        {/* Head + Coordinators in a Column */}
        <div className="flex flex-col mt-[50] ml-[350]">
          {/* Head Section */}
          <Head 
            imageSrc="/images/Soumik Roy.jpeg" 
            title="Speaker Curator Head" 
            name="Soumik Roy" 
            rollNo="bt23mtech11010" 
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
