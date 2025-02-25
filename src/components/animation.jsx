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
    <div className="bg-gray-50 mx-auto">
      {/* Top Left Animation */}
      <div className="absolute top-[50px] left-5 flex gap-4">
        {rectangles.map((rect, i) => (
          <motion.div
            key={`top-left-${i}`}
            className={rect.color}
            style={{ width: rect.width, height: rect.height, borderRadius: "50px" }}
            initial={{ y: -20 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: rectangles.length * 0.5, delay: i * 0.5 }}
          />
        ))}
        {/* Opposite moving circles */}
        {["bg-[#ACC8E2]", "bg-[#dbdcde]"].map((color, i) => (
          <motion.div
            key={`circle-top-${i}`}
            className={color}
            style={{ width: 50, height: 50, borderRadius: "9999px" }}
            initial={{ y: 20 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: rectangles.length * 0.5, delay: (rectangles.length + i) * 0.5 }}
          />
        ))}
      </div>

      {/* Bottom Right Animation */}
      <div className="absolute bottom-[-30px] right-5 flex gap-4 rotate-180">
        {rectangles.map((rect, i) => (
          <motion.div
            key={`bottom-right-${i}`}
            className={rect.color}
            style={{ width: rect.width, height: rect.height, borderRadius: "50px" }}
            initial={{ y: 20 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: rectangles.length * 0.5, delay: i * 0.5 }}
          />
        ))}
        {["bg-[#ACC8E2]", "bg-[#dbdcde]"].map((color, i) => (
          <motion.div
            key={`circle-bottom-${i}`}
            className={color}
            style={{ width: 50, height: 50, borderRadius: "9999px" }}
            initial={{ y: 40 }}
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: rectangles.length * 0.5, delay: (rectangles.length + i) * 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}
