import Animation from "../../components/animation";
import Menu from "../../components/menu";
import Overall from "../../components/Overall";
import Teambutton from "../../components/team-button";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center overflow-hidden">
      {/* Keep Animation only on larger screens */}
      <div className="hidden sm:block w-full">
        <Animation />
      </div>
      
      <div className="flex flex-col w-full">
        <Navbar />

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Fixed Menu to Prevent Overlap */}
          <div className="flex-shrink-0">
            <Menu />
          </div>

          {/* Right Section: Team Button + Overall */}
          <div className="flex flex-col items-center md:items-start w-full max-w-5xl gap-6 px-4 md:px-10">
            <Teambutton />

            {/* Ensure Overall Does Not Overlap */}
            <div className="flex justify-center md:justify-start w-full">
              <Overall />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
