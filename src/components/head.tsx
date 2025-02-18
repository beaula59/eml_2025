const Head = ({ imageSrc, title, name, rollNo, bgColor, textColor, positionClass }: { 
  imageSrc: string, 
  title: string, 
  name: string, 
  rollNo: string, 
  bgColor?: string, 
  textColor?: string, 
  positionClass?: string 
}) => {
  return (
    <div className={`w-[80vw] h-[28.44vw] max-w-[450px] md:h-[160px] rounded-[6%] md:rounded-[25px] flex flex-col items-center justify-center shadow-lg ${bgColor} ${positionClass} relative
      aspect-[450/160] md:aspect-auto`}>
      
      {/* Profile Image */}
      <div className="absolute top-[-31.25%] w-[26.67%] aspect-square rounded-full border-4 border-white overflow-hidden bg-white
        md:top-[-50px] md:w-[120px]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className={`mt-[11.11%] md:mt-[50px] text-center ${textColor}`}>
        <h2 className="text-[clamp(16px,4vw,20px)] md:text-xl font-bold font-[playfair]">{title}</h2>
        <p className="text-[clamp(14px,3.5vw,18px)] md:text-lg font-bold font-[lora]">{name}</p>
        <p className="text-[clamp(14px,3.5vw,18px)] md:text-lg font-bold font-[lora] m-[-6]">{rollNo}</p>
      </div>
    </div>
  );
};

export default Head;