"use client";
import React from 'react'
import CardCarousel from './CardCarousel'
import Wave from './WaveAnimation'

function Home4() {
  return (
    <div className="container-fluid mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative text-white min-h-screen">
          <div className="flex flex-col h-full justify-between">
            <div className='absolute -top-10'>
              <Wave />
            </div>
            <div className="">
                <div className="absolute bottom-[10%] lg:bottom-[0%] w-full max-w-3xl h-[68%] lg:h-[80%]">
                  <h2 className="relative text-4xl font-bold text-[#0C223F] drop-shadow-lg text-center mt-[0%] lg:mt-[5%] mb-5">
                      PAST SPEAKERS
                  </h2>
                  <div className="">
                    <CardCarousel />
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="relative h-[100vh] text-white min-h-screen">
          <div className="flex flex-col h-full justify-between">
            <div className="">
                <div className="absolute p-5 w-full max-w-3xl h-[500px]">
                  <div className="h-[400px]">
                    <CardCarousel />
                  </div>
                  <h2 className="relative mt-[20%] lg:mt-[0%] text-4xl font-bold text-[#0C223F] drop-shadow-lg text-center">
                      UPCOMING TALKS
                  </h2>
                </div>
            </div>
            <div className='absolute rotate-180 -bottom-5 right-0'>
                    <Wave color='#5373A6' />
                  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4