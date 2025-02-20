import React from "react";

const bgColors = [
  "bg-[#ACC8E2]",
  "bg-[#FFD9D9]",
  "bg-[#DBDCDE]",
  "bg-[#0C223F]",
  "bg-[#DF231D]",
  "bg-[#5373A6]",
];
const textColors = [
  "text-[#0C223F]",
  "text-[#DF231D]",
  "text-[#5373A6]",
  "text-[#ACC8E2]",
  "text-[#FFD9D9]",
  "text-[#DBDCDE]",
];

const SpeakerPile = ({ speakers, currentIndex, bgIndex }) => {
  const nextSpeakers = [
    ...speakers.slice(currentIndex + 1),
    ...speakers.slice(0, currentIndex),
  ].slice(0, 10);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-50 scale-[0.7]">
      <div className="relative w-40 h-40 mx-10">
        {nextSpeakers.map((speaker, index) => (
          <div
            key={speaker.id}
            className={`absolute w-full h-full rounded-lg shadow-lg blur-xs transition-all duration-700 ${
              bgColors[(bgIndex + index) % bgColors.length]
            }`}
            style={{
              zIndex: nextSpeakers.length - index,
              transform: `rotate(${index * 3}deg) translate(${index * 3}px, ${
                index * 3
              }px)`,
            }}
          >
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-full h-full object-cover blur-sm rounded-lg opacity-70"
            />
          </div>
        ))}
      </div>
      <div className="relative w-40 h-40">
        {nextSpeakers.map((speaker, index) => (
          <div
            key={speaker.id}
            className={`absolute w-full h-full p-4 rounded-lg shadow-lg blur-xs ${
              bgColors[(bgIndex + index) % bgColors.length]
            } ${textColors[(bgIndex + index) % textColors.length]}`}
            style={{
              zIndex: nextSpeakers.length - index,
              transform: `rotate(${index * 3}deg) translate(${index * 3}px, ${
                index * 3
              }px)`,
            }}
          >
            <p className="text-sm font-semibold blur-sm">
              {speaker.description.substring(0, 50)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerPile;
