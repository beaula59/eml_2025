"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const baseBars = [
  { width: 66, height: 440, left: 875, top: -51, color: "bg-[#DF231D]" },
  { width: 66, height: 418, left: 225, top: -81, color: "bg-[#DF231D]" },
  { width: 66, height: 412.5, left: 550, top: -51.5, color: "bg-[#4681AE]" },
  { width: 31, height: 464, left: 730, top: -17, color: "bg-[#E1E5E8]" },
  { width: 31, height: 442, left: 405, top: -17, color: "bg-[#E1E5E8]" },
  { width: 40, height: 406, left: 798, top: -17, color: "bg-[#5373A6]" },
  { width: 40, height: 406, left: 328, top: -17, color: "bg-[#5373A6]" },
  { width: 40, height: 349, left: 653, top: -17, color: "bg-[#ACC8E2]" },
  { width: 40, height: 383, left: 473, top: -51, color: "bg-[#ACC8E2]" },
  { width: 101, height: 404, left: 978, top: -81, color: "bg-[#DBDCDE]" },
  { width: 101, height: 376, left: 94, top: -53, color: "bg-[#DBDCDE]" },
  { width: 109, height: 460, left: 1116, top: -137, color: "bg-[#1D4F7C]" },
  { width: 109, height: 460, left: -54, top: -137, color: "bg-[#1D4F7C]" },
  { width: 301, height: 709, left: 1262, top: -320, color: "bg-[#AB1D1E]" },
];

const AnimatedWave = () => {
  const [bars, setBars] = useState(baseBars);

  useEffect(() => {
    const updatePositions = () => {
      const screenWidth = window.innerWidth;
      const scaleFactor = screenWidth / 1440; // Scale positions based on 1440px reference width

      const updatedBars = baseBars.map((bar) => ({
        ...bar,
        width: bar.width * scaleFactor,
        height: bar.height * scaleFactor,
        left: bar.left * scaleFactor,
        top: bar.top * scaleFactor,
      }));

      setBars(updatedBars);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <div className="relative w-full h-[40vh] md:h-[80vh] overflow-x-clip">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className={`${bar.color} rounded-full absolute`}
          style={{ width: bar.width, height: bar.height, left: bar.left, top: bar.top }}
          animate={{ 
            height: [bar.height, bar.height * 1.1, bar.height],
            top: [bar.top, bar.top - (bar.height * 0.05), bar.top] // Adjust top to animate both upper and lower halves
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedWave;
