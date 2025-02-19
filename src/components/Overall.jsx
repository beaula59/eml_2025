import React from "react";

const ContactCard = () => {
  return (
    <div className="fixed bottom-[25%] left-[60%] -translate-x-[60%] w-[85vw] max-w-[500px] min-h-[25vh] max-h-[33vh] bg-[#1D4F7C] text-white rounded-[20px] flex items-center p-[5%] gap-[4%] shadow-lg transition-all duration-300 mx-4 md:left-[60%] md:-translate-x-[60%] md:w-[75vw] lg:w-[60vw]">
      <div className="w-[30%] aspect-square rounded-full border-4 border-white overflow-hidden flex-shrink-0">
        <img
          src="/images/Pavankumar.jpeg"  
          alt="Pavan Kumar Shinde"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-center space-y-[2vh]">
        <h2 className="text-[28px] font-bold font-playfair leading-tight">
          Overall Head - Lead
        </h2>
        <span className="text-[21px] font-[lora] font-bold leading-none text-center">
          Pavan Kumar Shinde
        </span>
        <span className="text-[21px] hover:text-gray-300 font-[lora] font-bold leading-none">
          <a href="mailto:co22btech11008@iith.ac.in" className="ml-1">
            co22btech11008@iith.ac.in
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
