import React from "react";

const ContactCard = () => {
  return (
    <div className="absolute bottom-[160px] left-[500px] bg-[#1F4A72] text-white w-[500px] h-[200px] rounded-3xl flex items-center px-8 py-6 space-x-6 shadow-lg">
      <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
        <img
          src="/images/Pavankumar.jpeg"  
          alt="Pavan Kumar Shinde"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">Overall Head - Lead</h2>
        <p className="text-xl font-semibold">Pavan Kumar Shinde</p>
        <a
          href="mailto:co22btech11008@iith.ac.in"
          className="text-lg underline hover:text-gray-300 transition"
        >
          co22btech11008@iith.ac.in
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
