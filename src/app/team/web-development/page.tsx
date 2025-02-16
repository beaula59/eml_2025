import Animation from "../../../components/animation";
import Menu from "../../../components/menu";
import Head from "../../../components/head"
import Coordinator from "../../../components/coordinator"

export default function DesignPR() {
  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      <Animation />
      <Menu />
      <Head
        imageSrc="/images/Beaula Mahima V.jpeg"
        title="Web Development"
        name="Beaula Mahima V"
        rollNo="ma21btech11002"
        bgColor="bg-[#1E456E]"
        positionClass="absolute top-[120px] left-[60%] -translate-x-1/2"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 absolute top-[270px] left-[400px] mt-10 w-[800px] h-[300px] p-5">
        <Coordinator imageSrc="/images/Krishna Kumar.jpg" title="Coordinator" name="Krishna Kumar" rollNo="em23mtech11006" />
        <Coordinator imageSrc="/images/Namagiri Tejasri.jpg" title="Coordinator" name="Namagiri Tejasri" rollNo="ep23btech11018" />
        <Coordinator imageSrc="/images/Bhavitha.jpeg" title="Coordinator" name="Kakkirala Bhavitha" rollNo="co22btech11005" />
        <Coordinator imageSrc="/images/Vasana Manas.jpg" title="Coordinator" name="Vasana Manas" rollNo="ee23btech11062" />
      </div>


    </div>
  );
}
