const TeamButton = ({ text, backgroundColor }) => {
  return (
    <div className={`
      w-[60vw] sm:w-[70vw] md:w-[70vw] lg:w-[60vw] xl:w-50vw]
      max-w-[350px] min-w-[100px]  
      h-[10vh] sm:h-[11vh] md:h-[12vh]
      max-h-[120px] min-h-[50px]  
      rounded-full flex justify-center items-center shadow-lg
      ${backgroundColor || 'bg-[#0c223f]'}
    `}>
      <span className="text-white font-bold font-[merriweather] text-center
        text-[6.5vw] sm:text-[3.5vw] md:text-[3.5vw] lg:text-[2.5vw] xl:text-[2.5vw]
        min-text-[20px] max-text-[50px]
      ">
        {text || 'Team 2024-2025'}
      </span>
    </div>
  );
};

export default TeamButton;
