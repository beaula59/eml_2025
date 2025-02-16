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
    <div className={`w-[450px] h-[160px] rounded-[50px] flex flex-col items-center justify-center shadow-lg ${bgColor} ${positionClass}`}>
      {/* Profile Image */}
      <div className="absolute top-[-50px] w-[120px] h-[120px] rounded-full border-4 border-white overflow-hidden bg-white">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className={`mt-[50px] text-center ${textColor}`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg">{name}</p>
        <p className="text-lg">{rollNo}</p>
      </div>
    </div>
  );
};

export default Head;
