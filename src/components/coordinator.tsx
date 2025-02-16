const Coordinator = ({ imageSrc, title, name, rollNo }) => {
    return (
      <div className="w-[170px] h-[150px] bg-[#B0C4DE] rounded-[50px] flex flex-col items-center justify-center text-[#1E456E] relative">
        
        <div className="absolute top-[-50px] w-[95px] h-[95px] rounded-full border-4 border-white overflow-hidden">
          <img src={imageSrc} alt={title} className="object-center"/>
        </div>
  
        <div className="mt-[15px] text-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-md">{name}</p>
          <p className="text-md">{rollNo}</p>
        </div>
      </div>
    );
};

export default Coordinator;
