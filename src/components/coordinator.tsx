const Coordinator = ({ imageSrc, title, name, rollNo }) => {
    return (
        <div className="
        w-[clamp(120px, 45vw, 300px)] 
        h-[clamp(100px, 40vw, 250px)] 
        bg-[#B0C4DE] flex flex-col items-center justify-center 
        text-[#1E456E] relative 
        md:w-[170px] md:h-[140px] md:rounded-[30px]">
          
        <div className="
            absolute top-[-33.33%] w-[65%] h-[65%] rounded-full border-4 border-white overflow-hidden
            md:top-[-50px] md:w-[95px] md:h-[95px]">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-center"
          />
        </div>
  
        <div className="mt-[12%] text-center md:mt-[15px]">
          <h2 className="text-[clamp(14px,4vw,22px)] font-bold font-[lora] md:text-xl">{title}</h2>
          <p className="text-[18px] font-[lora] font-bold md:text-md">{name}</p>
          <p className="text-[15px] font-[lora] font-bold md:text-md">{rollNo}</p>
        </div>
      </div>
    );
  };
  
  export default Coordinator;
  