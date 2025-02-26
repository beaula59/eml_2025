import React from "react";

const ContactCard = () => {
  return (
    <div className="w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[60vw] 
        max-w-[500px] min-h-[22vh] max-h-[35vh] 
        bg-[#1D4F7C] text-white rounded-[20px] flex items-center 
        p-[5%] gap-[4%] transition-all duration-300">
      
      {/* Profile Image */}
      <div className="w-[30%] sm:w-[25%] md:w-[30%] aspect-square rounded-full border-4 border-white overflow-hidden flex-shrink-0">
        <img
          src="/images/Pavankumar.jpeg"  
          alt="Pavan Kumar Shinde"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-[2vh] w-[65%] sm:w-[70%] lg:w-[75%]">
          <h2 className="text-lg sm:text-l md:text-2xl lg:text-2xl xl:text-3xl text-center font-bold font-playfair leading-tight">
            Overall Head
          </h2>
          <span className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-[lora] font-bold leading-none text-center">
            Pavan Kumar Shinde
          </span>
          <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-l hover:text-gray-300 font-[lora] font-bold leading-none text-center">
            <a href="mailto:co22btech11008@iith.ac.in" className="">
              co22btech11008@iith.ac.in
            </a>
          </span>
        </div>

    </div>
  );
};

export default ContactCard;
