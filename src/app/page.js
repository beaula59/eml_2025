import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <TextSection/>
    <Carousel/>
    </>
  );
}
