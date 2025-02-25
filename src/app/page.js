'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Home4 from "../components/Home4";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setScale(Math.max(1 - elapsed / 1000, 0.6)); // Faster scaling
    }, 30);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1000); // Reduced loading time

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-white">
        <img
          src="/eml1.png"
          className="rounded-full object-cover w-[10rem] md:w-[18rem] mb-6 transition-transform duration-150"
          alt="logo"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-50">
        <Navbar />
        <Hero />

        {/* ✅ Animated Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% is in view
        >
          <Carousel />
        </motion.div>

        <Home4 />
      <Footer />
      </div>
    </div>
  );
}

