const Coordinator = ({ imageSrc, title, name, rollNo }) => {
  return (
    <div className="
    bg-[#B0C4DE] 
    flex flex-col items-center justify-center 
    text-[#1E456E] 
    relative 
    rounded-[15px]
    sm:rounded-[15px]
    md:rounded-[20px]
    lg:rounded-[25px]
    xl:rounded-[30px]
    p-[clamp(10px, 2vw, 20px)]
    text-[clamp(14px, 3vw, 20px)]
    w-[110px]
    sm:w-[110px] sm:h-[120px]
    md:w-[170px] md:h-[150px]
    lg:w-[150px] lg:h-[140px]
    xl:w-[170px] xl:h-[130px]
  ">
      {/* Smaller Profile Image (Positioned Outside) */}
      <div className="
          absolute top-[-25%] w-[50%] aspect-square rounded-full border-4 border-white overflow-hidden
          md:top-[-40px] md:w-[80px]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content (Responsive Size) */}
      <div className="mt-[30%] text-center md:mt-[25px]">
        <h2 className="text-[clamp(10px,3vw,20px)] font-bold font-[lora] md:text-base">{title}</h2>
        <p className="text-[clamp(8px,3vw,18px)] font-[lora] font-bold md:text-base sm:text-base">{name}</p>
        <p className="text-[clamp(6px,3vw,16px)] font-[lora] font-bold md:text-sm">{rollNo}</p>
      </div>
    </div>
  );
};

export default Coordinator;
