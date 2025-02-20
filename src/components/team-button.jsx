const TeamButton = () => {
  return (
    <div className="
      absolute top-[25%] left-[60%] -translate-x-[60%]  
      w-[50vw] max-w-[350px] min-w-[200px]  
      h-[12vh] max-h-[120px] min-h-[70px]  
      bg-[#0c223f] rounded-full flex justify-center items-center shadow-lg
      md:top-[25%]
    ">
      <span className="text-white font-bold font-[Playfair Display]
        text-[30px] sm:text-[min(8vw, 3rem)] lg:text-[min(6vw, 4rem)]
            ">
        Team 2024-2025
      </span>
    </div>
  );
};

export default TeamButton;
