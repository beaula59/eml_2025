import React from "react";

const colors = [
  { bg: "bg-[#ACC8E2]", text: "text-[#0C223F]" },
  { bg: "bg-[#FFD9D9]", text: "text-[#DF231D]" },
  { bg: "bg-[#DBDCDE]", text: "text-[#5373A6]" },
  { bg: "bg-[#0C223F]", text: "text-[#ACC8E2]" },
  { bg: "bg-[#DF231D]", text: "text-[#FFD9D9]" },
  { bg: "bg-[#5373A6]", text: "text-[#DBDCDE]" },
];

const MobileSpeakerList = ({
  speakers,
  currentIndex,
  setCurrentIndex,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
      <div className="bg-white h-full w-3/4 max-w-sm float-right p-4 overflow-y-auto">
        {speakers.map((speaker, index) => (
          <div
            key={speaker.id}
            className={`flex items-center p-3 cursor-pointer border border-[#0C223F] rounded-lg transition hover:scale-105 shadow-md mb-2 ${
              colors[index % colors.length].bg
            } ${colors[index % colors.length].text}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow"
            />
            <span className="font-semibold">{speaker.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSpeakerList;
