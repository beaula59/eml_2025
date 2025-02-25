import React from 'react';
import Animation from './HeroAnimation';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function Hero() {
  return (
    <motion.section
      className="bg-gray-50 min-h-screen relative"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="mx-auto max-w-screen-lg px-4 py-20 h-full">
        <motion.div
          className='flex flex-col justify-center mx-auto w-full md:w-[48rem] items-center'
          variants={fadeInUp}
        >
          <motion.div className='flex flex-col lg:flex-row justify-center items-center' variants={fadeInUp}>
            {/* Logo Image */}
            <motion.img
              src="/eml1.png"
              className="w-[15rem] h-[15rem] rounded-full object-cover mb-6 lg:mb-0"
              alt="logo"
              variants={fadeInUp}
            />
            <motion.div className="text-center lg:text-left" variants={fadeInUp}>
              {/* Main Heading */}
              <motion.h1 className="w-full lg:w-[28rem] font-merriweather font-bold text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] text-[#1D4F7C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" variants={fadeInUp}>
                EXTRA-MURAL LECTURES
              </motion.h1>
              {/* Subtitle */}
              <motion.p className="w-full lg:w-[20rem] font-merriweather font-normal text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[1.75rem] text-black" variants={fadeInUp}>
                IIT Hyderabad
              </motion.p>
            </motion.div>
          </motion.div>
          {/* Quote */}
          <motion.p className="text-center font-playfair italic font-normal mt-5 text-[1rem] md:text-[2rem] lg:text-[2.25rem] leading-none text-[#1D4F7C] whitespace-nowrap" variants={fadeInUp}>
            “Learn beyond the four walls of a classroom”
          </motion.p>
        </motion.div>
      </div>

      {/* Animation Section */}
      <motion.div className="relative mx-auto flex justify-center items-center top-2 md:top-6 w-full" variants={fadeInUp}>
        <Animation />
      </motion.div>

      <motion.div
        className="mb-12 mt-5 md:-mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="mx-auto max-w-xl text-left text-primary font-playfair italic p-5 ">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            "We, the Extra Mural Lectures team at IIT Hyderabad,
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl ">
            work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives."
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
