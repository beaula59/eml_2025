"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const baseBars = [
    { width: 18.36, height: 165.95, left: 328.66, top: 173.34, color: "bg-[#AB1D1E]" },
    { width: 18.36, height: 212.49, left: 387.41, top: 150.51, color: "bg-[#AB1D1E]/80" },
    { width: 18.36, height: 212.49, left: 161.57, top: 150.51, color: "bg-[#AB1D1E]/70" },
    { width: 18.36, height: 212.49, left: 356.2, top: 150.51, color: "bg-[#AB1D1E]/85" },
    { width: 18.36, height: 212.49, left: 192.79, top: 147, color: "bg-[#AB1D1E]/50" },
    { width: 18.36, height: 122.05, left: 446.16, top: 189.15, color: "bg-[#AB1D1E]" },
    { width: 18.36, height: 122.05, left: 97.31, top: 195.29, color: "bg-[#AB1D1E]/40" },
    { width: 18.36, height: 122.05, left: 0, top: 206.71, color: "bg-[#AB1D1E]" },
    { width: 18.36, height: 122.05, left: 293.77, top: 189.15, color: "bg-[#AB1D1E]/90" },
    { width: 18.36, height: 122.05, left: 224, top: 189.15, color: "bg-[#AB1D1E]/30" },
    { width: 18.36, height: 122.05, left: 569.18, top: 191.78, color: "bg-[#AB1D1E]/90" },
    { width: 18.36, height: 122.05, left: 638.95, top: 195.29, color: "bg-[#AB1D1E]/75" },
    { width: 18.36, height: 122.05, left: 604.07, top: 191.78, color: "bg-[#AB1D1E]/60" },
    { width: 18.36, height: 86.93, left: 475.54, top: 209.34, color: "bg-[#AB1D1E]/35" },
    { width: 18.36, height: 86.93, left: 258.89, top: 206.71, color: "bg-[#AB1D1E]/70" },
    { width: 18.36, height: 86.93, left: 66.1, top: 212.85, color: "bg-[#AB1D1E]/70" },
    { width: 18.36, height: 86.93, left: 535.21, top: 206.71, color: "bg-[#AB1D1E]/60" },
    { width: 18.36, height: 86.93, left: 673.84, top: 209.34, color: "bg-[#AB1D1E]/90" },
    { width: 19.28, height: 52.68, left: 503.08, top: 226.9, color: "bg-[#AB1D1E]/85" },
    { width: 19.28, height: 52.68, left: 708.72, top: 226.9, color: "bg-[#AB1D1E]" },
    { width: 18.36, height: 169.46, left: 416.79, top: 169.83, color: "bg-[#AB1D1E]/65" },
    { width: 18.36, height: 169.46, left: 132.2, top: 169.83, color: "bg-[#AB1D1E]" },
    { width: 18.36, height: 169.46, left: 31.21, top: 173.34, color: "bg-[#AB1D1E]" }
  ];
  

const AnimatedWave = () => {
  const [bars, setBars] = useState(baseBars);

  useEffect(() => {
    const updatePositions = () => {
      const screenWidth = window.innerWidth;
      const scaleFactor = screenWidth / (2040); // Scale positions based on 1440px reference width

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
    <div className="relative w-full h-[80vh]">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className={`${bar.color} rounded-full absolute`}
          style={{ width: bar.width, height: bar.height, left: bar.left, top: bar.top }}
          animate={{ height: [bar.height, bar.height * 1.1, bar.height] }}
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
