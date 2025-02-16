"use client";
import React from "react";
import { motion } from "framer-motion";

const colors = ["bg-[#1D4F7C]", "bg-gray-300", "bg-red-600"];
const barCount = 6; // Total unique bars (mirrored on both axes)
const barWidth = 40;
const baseHeight = 100;

// Function to get a smooth height variation
const getRandomHeight = (base) => base + Math.random() * 50 - 25;

// Generate bars symmetrically along X and Y axis
const halfBars = Array.from({ length: barCount / 2 }, (_, i) => {
  const heightVariation = (i % (barCount / 2)) * 30; // Symmetrical height variation
  return {
    width: barWidth,
    baseHeight: baseHeight + heightVariation,
    color: colors[i % colors.length],
  };
});

const bars = [...halfBars]; // Mirror along X-axis

function AnimatedWave() {
  return (
    <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-lg flex justify-center items-center gap-2 overflow-hidden">
      {[...bars, ...bars.slice().reverse()].map((bar, i) => (
        <motion.div
          key={i}
          className={`${bar.color} rounded-full`}
          style={{ width: bar.width, height: bar.width }} // Make it symmetrical along Y-axis too
          animate={{
            height: [bar.baseHeight, getRandomHeight(bar.baseHeight), bar.baseHeight],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
            delay: (i % barCount) * 0.1, // Consistent delay pattern
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedWave;