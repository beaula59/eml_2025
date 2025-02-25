import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextSection from "../components/TextSection";
import Carousel from "../components/Carousel";
import Home4 from "../components/Home4";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <TextSection/>
    <Carousel/>
    <Home4/>
    </>
  );
}
