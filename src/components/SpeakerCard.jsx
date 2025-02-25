import React from "react";

const bgColors = [
  "bg-[#5373A6]",
  "bg-[#ACC8E2]",
  "bg-[#FFD9D9]",
  "bg-[#DBDCDE]",
  "bg-[#0C223F]",
  "bg-[#DF231D]",
];
const textColors = [
  "text-[#DBDCDE]",
  "text-[#0C223F]",
  "text-[#DF231D]",
  "text-[#5373A6]",
  "text-[#ACC8E2]",
  "text-[#FFD9D9]",
];
const borderColors = [
  "border-[#DBDCDE]",
  "border-[#0C223F]",
  "border-[#DF231D]",
  "border-[#5373A6]",
  "border-[#ACC8E2]",
  "border-[#FFD9D9]",
];

const SpeakerCard = ({ speaker, bgIndex }) => {
  const handleReadMore = () => {
    if (speaker.moreDetails) {
      window.open(speaker.moreDetails, "_blank");
    } else {
      alert("More details not available for this speaker.");
    }
  };

  return (
    <div className="laptop:z-50 h-[600px] laptop:h-[320px] p-3 rounded-lg flex flex-col laptop:flex-row items-stretch laptop:w-[80%]">
      {/* Speaker Image Card */}
      <div
        className={`w-full laptop:w-[30%] p-3 rounded-lg shadow-lg flex flex-col items-center justify-between text-center m-2 transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <div className="flex-grow flex items-center justify-center">
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-32 h-32 laptop:w-40 laptop:h-40 p-1 object-cover"
          />
        </div>
        <div className="flex-grow laptop:h-full">
          <h2 className="text-lg font-semibold">{speaker.name}</h2>
          <p className="text-sm">{speaker.title}</p>
        </div>
      </div>

      {/* Speaker Details Card */}
      <div
        className={`w-full laptop:w-[65%] p-3 rounded-lg shadow-lg flex flex-col justify-between m-2 transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <div className="flex-grow mb-2 laptop:text-s">
          <p>{speaker.description}</p>
        </div>

        <div className="flex justify-end items-end w-full scale-[0.8]">
          <button
            className={`border ${borderColors[bgIndex]} ${textColors[bgIndex]} px-2 py-1 cursor-pointer rounded-full flex items-center gap-1 transition duration-300
            hover:bg-white hover:text-black hover:border-black`}
            onClick={handleReadMore}
          >
            Read More
            <span
              className={`border ${borderColors[bgIndex]} rounded-full px-2 text-lg transition duration-300
              hover:bg-white hover:text-black hover:border-black`}
            >
              {">"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;

