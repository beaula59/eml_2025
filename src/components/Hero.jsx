import React from 'react'
import Animation from './Animation'

function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
        <div className='flex justify-center'>
            <img src="/eml1.png" className="h-[312px] w-[312px]" alt="logo" />
            <div>
            <h1 className="text-3xl font-playfair font-extrabold sm:text-5xl text-primary">
            EXTRA-MURAL LECTURES.
            </h1>
            <p className="mt-4 sm:text-xl/relaxed text-primary">
            “Learn beyond the four walls of a classroom”
            </p>
            </div>
        </div>
        </div>
    </div>
    <div className="relative flex justify-start bottom-0">
      <Animation />
    </div>
    </section>
  )
}

export default Hero