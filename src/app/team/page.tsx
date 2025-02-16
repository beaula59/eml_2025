import Animation from "../../components/animation";
import Menu from "../../components/menu";
import Overall from "../../components/Overall";
import Teambutton from "../../components/team-button";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Animation />
      <Menu />
      <Overall />
      <Teambutton />
    </div>
  );
}
