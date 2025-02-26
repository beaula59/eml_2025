import React, { useEffect, useRef } from "react";

const colors = [
  { bg: "bg-[#ACC8E2]", text: "text-[#0C223F]" },
  { bg: "bg-[#FFD9D9]", text: "text-[#DF231D]" },
  { bg: "bg-[#DBDCDE]", text: "text-[#5373A6]" },
  { bg: "bg-[#0C223F]", text: "text-[#ACC8E2]" },
  { bg: "bg-[#DF231D]", text: "text-[#FFD9D9]" },
  { bg: "bg-[#5373A6]", text: "text-[#DBDCDE]" },
];

const SpeakerList = ({ speakers, currentIndex, setCurrentIndex }) => {
  const speakerRefs = useRef([]);

  useEffect(() => {
    if (speakerRefs.current[currentIndex]) {
      speakerRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-custom-scroll scrollbar-track-transparent p-3 rounded-xl shadow-lg flex flex-col">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          ref={(el) => (speakerRefs.current[index] = el)}
          className={`z-50 flex items-center p-3 cursor-pointer border border-[#0C223F] rounded-lg transition hover:scale-105 shadow-md ${
            colors[index % colors.length].bg
          } ${colors[index % colors.length].text} ${
            index === currentIndex ? "border-4 border-[#B22222]" : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        >
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow"
          />
          <span className="font-semibold laptop:text-sm">{speaker.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SpeakerList;

