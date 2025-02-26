const Head = ({ imageSrc, title, name, rollNo, bgColor = "", textColor = "", positionClass = "" }) => {
  return (
    <div className={`w-[70vw] h-[32vw] max-w-[450px] md:h-[160px] rounded-[10px] md:rounded-[25px] flex flex-col items-center justify-center shadow-lg ${bgColor} ${positionClass} relative
      aspect-[450/160] md:aspect-auto`}>
      
      {/* Profile Image */}
      <div className="absolute top-[-31.25%] w-[26.67%] aspect-square rounded-full border-4 border-white overflow-hidden bg-white md:w-[120px]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-center"
        />
      </div>

      {/* Text Content */}
      <div className={`mt-[11.11%] md:mt-[50px] text-center ${textColor}`}>
        <h2 className="text-[clamp(16px,4vw,20px)] md:text-xl font-bold font-playfair">{title}</h2>
        <p className="text-[clamp(14px,3.5vw,18px)] md:text-l font-bold font-[lora]">{name}</p>
        <p className="text-[clamp(14px,3.5vw,18px)] md:text-sm font-bold font-[lora] m-[-6]">{rollNo}</p>
      </div>
    </div>
  );
};

export default Head;
