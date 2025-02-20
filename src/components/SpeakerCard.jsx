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
    <div className="laptop:z-50 h-[600px] laptop:h-[380px] p-4 rounded-lg flex flex-col laptop:flex-row items-stretch">
      <div
        className={`w-full laptop:w-1/3 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between text-center m-2 transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <div className="flex-grow flex items-center justify-center">
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-40 h-40 laptop:w-60 laptop:h-60 p-3 object-cover"
          />
        </div>
        <div className="flex-grow overflow-y-auto h-[50px] laptop:h-auto">
          <h2 className="text-lg font-bold mt-2">{speaker.name}</h2>
          <p className="text-sm">{speaker.title}</p>
        </div>
      </div>

      <div
        className={`w-full laptop:w-2/3 p-6 rounded-lg shadow-lg flex flex-col justify-between m-2 p-4 h-full transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <div className="flex-grow overflow-y-auto mb-4 h-[300px] laptop:h-auto">
          <p>{speaker.description}</p>
        </div>

        <div className="flex justify-end items-end w-full scale-[0.8]">
          <button
            className={`border ${borderColors[bgIndex]} ${textColors[bgIndex]} px-1 py-1 cursor-pointer rounded-full flex items-center gap-1 transition duration-300
            hover:bg-white hover:text-black hover:border-black`}
            onClick={handleReadMore}
          >
            Read More
            <span
              className={`border ${borderColors[bgIndex]} rounded-full px-4 py-2 text-lg transition duration-300
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
