"use client";
import { motion } from "framer-motion";

const rectangles = [
  { width: 50, height: 180, color: "bg-[#1D4F7C]" },
  { width: 50, height: 150, color: "bg-[#dbdcde]" },
  { width: 50, height: 120, color: "bg-[#DF231D]" },
  { width: 50, height: 70, color: "bg-[#1D4F7C]" },
  { width: 50, height: 100, color: "bg-[#dbdcde]" },
  { width: 50, height: 120, color: "bg-[#DF231D]" },
  { width: 50, height: 120, color: "bg-[#dbdcde]" },
  { width: 50, height: 70, color: "bg-[#1D4F7C]" },
];

export default function Page() {
  return (
    <div className="bg-white mx-auto">
      {/* Top Left Animation */}
      <div className="absolute top-[70px] left-5 flex gap-4">
        {rectangles.map((rect, i) => (
          <motion.div
            key={`top-left-${i}`}
            className={`${rect.color}`}
            style={{
              width: rect.width,
              height: rect.height,
              borderRadius: "50px",
            }}
            initial={{ y: -20 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: rectangles.length * 0.5,
              delay: i * 0.5,
            }}
          />
        ))}
        {/* Opposite moving circles */}
        <motion.div
          className="bg-[#ACC8E2]"
          style={{
            width: 50,
            height: 50,
            borderRadius: "9999px",
          }}
          initial={{ y: 20 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: rectangles.length * 0.5,
            delay: rectangles.length * 0.5,
          }}
        />
        <motion.div
          className="bg-[#dbdcde]"
          style={{
            width: 50,
            height: 50,
            borderRadius: "9999px",
          }}
          initial={{ y: 20 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: rectangles.length * 0.5,
            delay: (rectangles.length + 1) * 0.5,
          }}
        />
      </div>

      <div
        className="absolute bottom-[-30] right-5 flex gap-4"
        style={{ transform: "rotate(180deg)" }}
      >
        {rectangles.map((rect, i) => (
          <motion.div
            key={`bottom-right-${i}`}
            className={`${rect.color}`}
            style={{
              width: rect.width,
              height: rect.height,
              borderRadius: "50px",
            }}
            initial={{ y: 20 }}
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: rectangles.length * 0.5,
              delay: i * 0.5,
            }}
          />
        ))}
        <motion.div
    className="bg-[#ACC8E2]"
    style={{
      width: 50,
      height: 50,
      borderRadius: "9999px",
      bottom: "20px",
    }}
    initial={{ y: 40 }}
    animate={{ y: [0, 30, 0] }}
    transition={{
      repeat: Infinity,
      duration: rectangles.length * 0.5,
      delay: rectangles.length * 0.5,
    }}
  />

  <motion.div
    className="bg-[#dbdcde]"
    style={{
      width: 50,
      height: 50,
      borderRadius: "9999px",
      bottom: "10px", 
    }}
    initial={{ y: 40 }}
    animate={{ y: [0, 30, 0] }}
    transition={{
      repeat: Infinity,
      duration: rectangles.length * 0.5,
      delay: (rectangles.length + 1) * 0.5,
    }}
  />
   </div>
   </div>
  );
}