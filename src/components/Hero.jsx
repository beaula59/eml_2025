import React from 'react'
import Animation from './HeroAnimation'

function Hero() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen relative">
        <div className="mx-auto max-w-screen-xl px-4 py-32 h-full">
          <div className='flex justify-center items-center'>
            {/* Logo Image */}
            <img
              src="/eml1.png"
              className="w-[313px] h-[312px] rounded-full object-cover"
              alt="logo"
            />
            <div>
            {/* Main Heading */}
            <h1 className="w-[559px] h-[167px] font-merriweather font-bold text-[64px] leading-[80px] text-[#1D4F7C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              EXTRA-MURAL LECTURES.
            </h1>

            {/* Subtitle */}
            <p className="w-[412px] h-[35px] font-merriweather font-normal text-[26px] leading-[33px] text-black">
              IIT Hyderabad
            </p>

            </div>
          </div>
          {/* Quote */}
          <p className="mx-auto w-[768px] h-[100px] font-playfair italic font-normal text-[40px] leading-[53px] text-[#1D4F7C]">
            “Learn beyond the four walls of a classroom”
          </p>
        </div>
        
        {/* Animation Section */}
        <div className="relative mx-auto flex justify-center items-center bottom-0 w-full">
          <Animation />
        </div>
      </section>
    </>
  )
}

export default Hero