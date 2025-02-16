"use client";
import React from "react";
import { motion } from "framer-motion";

const colors = ["bg-[#AB1D1E]", "bg-[#1D4F7C]", "bg-[#DBDCDE]", "bg-[#DF231D]", "bg-[#5373A6]", "bg-[#E1E5E8]", "bg-[#ACC8E2]", "bg-[#AB1D1E]"];
const barCount = 7;
const barWidths = [304, 109, 101, 66 , 40, 31, 40];
const barHeights = [709, 460, 404, 440 , 406, 464, 349];
const barTops = [-320, -137, -81, -51 , -17, -17, -17];


// Generate bars symmetrically along X and Y axis
const halfBars = Array.from({ length: barCount }, (_, i) => {
  return {
    width: barWidths[i % barWidths.length],
    barHeight: barHeights[i % barHeights.length],
    color: colors[i % colors.length],
    barTop: barTops[i % barTops.length],
  };
});

const bars = [...halfBars];

function AnimatedWave() {
  return (
    <div className="w-full bottom-[20px] max-w-screen-lg flex justify-around gap-8">
      {[...bars, ...bars.slice().reverse()].map((bar, i) => (
        <motion.div
          key={i}
          className={`${bar.color} rounded-full`}
          style={{ width: bar.width, height: bar.barHeight, marginTop:bar.barTop }}
          // animate={{
          //   height: [bar.baseHeight, getRandomHeight(bar.baseHeight), bar.baseHeight],
          // }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 2,
          //   ease: [0, 0.71, 0.2, 1.01],
          //   delay: (i % barCount) * 0.1, // Consistent delay pattern
          // }}
        />
      ))}
    </div>
  );
}

export default AnimatedWave;