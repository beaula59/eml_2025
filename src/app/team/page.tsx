import Animation from "../../components/animation";
import Menu from "../../components/menu";
import Overall from "../../components/Overall";
import Teambutton from "../../components/team-button";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white h-screen relative flex flex-col items-center overflow-hidden">
      {/* Keep Animation only on larger screens */}
      <div className="hidden sm:block">
        <Animation />
      </div>
      <div className="flex flex-col"><Navbar/>
      <div className="flex flex-row">
      <Menu/>
      <div className="flex flex-col">
      <Teambutton />
      <Overall />
      </div>
      </div>
      </div>
      
    </div>
  );
}

