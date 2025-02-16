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
  return (
    <div className="w-1/2 h-full p-4 rounded-lg flex flex-row items-center">
      <div
        className={`w-1/3 h-full p-6 rounded-lg shadow-lg flex flex-col items-center shadow-lg m-2 transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <img src={speaker.photo} alt={speaker.name} className="w-60 h-60 p-3" />
        <h2 className="text-xl font-bold mt-2">{speaker.name}</h2>
        <p className="text-gray-600">{speaker.title}</p>
      </div>
      {/* <div className="flex flex-col justify-between items-center bg-[#0C223F] shadow-lg m-2 h-full p-4 text-center text-[#ACC8E2]"> */}
      <div
        className={`w-1/2 p-6 rounded-lg shadow-lg flex flex-col justify-between items-center shadow-lg m-2 p-4 h-full transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <p className="mb-4">{speaker.description}</p>
        {/* <button
          className={`border border-[#ACC8E2] text-[#ACC8E2] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#ACC8E2] hover:text-[#0C223F] hover:border-[#0C223F] transition duration-300`}
        >
          Read More
          <span className="border border-[#ACC8E2] hover:border-[#0C223F] rounded-full px-4 py-2 text-lg">
            {">"}
          </span>
        </button> */}

        <div className="flex justify-end items-end w-full">
          <button
            className={`border ${borderColors[bgIndex]} ${textColors[bgIndex]} px-4 py-2 cursor-pointer rounded-full flex items-center gap-2 transition duration-300
            hover:bg-white hover:text-black hover:border-black`}
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
