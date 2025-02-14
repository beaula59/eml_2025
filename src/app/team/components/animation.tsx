"use client";
import { motion } from "framer-motion";

const rectangles = [
    { width: 45, height: 180, color: "bg-custom-blue" },
    { width: 45, height: 150, color: "bg-gray-300" },
    { width: 45, height: 120, color: "bg-red-600" },
    { width: 45, height: 70, color: "bg-custom-blue" },
    { width: 45, height: 100, color: "bg-gray-300" },
    { width: 45, height: 120, color: "bg-red-600" },
    { width: 45, height: 120, color: "bg-gray-300" },
    { width: 45, height: 70, color: "bg-custom-blue" },
  ];
  

export default function Page() {
  return (
    <div className=" bg-white mx-auto">
      {/* Top Left Corner Animation (120px from top) */}
      <div className="absolute top-[120px] left-5 flex gap-7">
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
            transition={{ repeat: Infinity, duration: rectangles.length * 0.5, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Bottom Right Corner Animation */}
      
        <div className="absolute bottom-5 right-5 flex gap-7" style={{ transform: 'rotate(180deg)' }}  >
            {rectangles.map((rect, i) => (
                <motion.div
                key={`bottom-righ
                    t-${i}`}
                className={`${rect.color}`}
                style={{
            width: rect.width,
            height: rect.height,
            borderRadius: "50px",
            }}
            initial={{ y: 20 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: rectangles.length * 0.5, delay: i * 0.5 }}
        />
    ))}
    </div>

    </div>
  );
}
