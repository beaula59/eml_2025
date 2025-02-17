import React from 'react';
import Animation from './HeroAnimation';

function Hero() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen relative">
        <div className="mx-auto max-w-screen-xl px-4 py-32 h-full">
          <div className='flex flex-col lg:flex-row justify-center items-center'>
            {/* Logo Image */}
            <img
              src="/eml1.png"
              className="w-[313px] h-[312px] rounded-full object-cover mb-8 lg:mb-0"
              alt="logo"
            />
            <div className="text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="w-full lg:w-[559px] h-[167px] font-merriweather font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[48px] sm:leading-[64px] md:leading-[72px] lg:leading-[80px] text-[#1D4F7C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                EXTRA-MURAL LECTURES
              </h1>
              {/* Subtitle */}
              <p className="w-full lg:w-[412px] h-[35px] font-merriweather font-normal text-[18px] sm:text-[22px] lg:text-[26px] leading-[28px] sm:leading-[33px] lg:leading-[33px] text-black">
                IIT Hyderabad
              </p>
            </div>
          </div>
          {/* Quote */}
          <p className="mx-auto text-center w-full lg:w-[768px] h-[100px] font-playfair italic font-normal text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[53px] text-[#1D4F7C]">
            “Learn beyond the four walls of a classroom”
          </p>
        </div>
        
        {/* Animation Section */}
        <div className="relative mx-auto flex justify-center items-center bottom-29 w-full">
          <Animation />
        </div>

        <div className="mb-12 -mt-12">
          <div className="mx-auto max-w-xl text-center text-primary font-playfair italic font-normal">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              "We, the Extra Mural Lectures team at IIT Hyderabad,
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl">
              work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
