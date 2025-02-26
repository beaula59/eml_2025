'use client'
import React from 'react';
import Animation from './HeroAnimation';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isFinished, setIsFinished] = useState(false);

  const words = ["Energetic Mayhem League?", "Endless Meme Lovers?", "EXTRA-MURAL LECTURES"];
  const deleteSpeed = 100;
  const pauseBeforeDelete = 1000;
  const pauseBeforeType = 500;

  useEffect(() => {
    const currentWord = words[loopNum];
    const isLastWord = loopNum === words.length - 1;

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
          setTypingSpeed(150);
        } else if (isLastWord) {
          setIsFinished(true);
          return;
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          return;
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
          setTypingSpeed(deleteSpeed);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(pauseBeforeType);
        }
      }
    };

    if (!isFinished) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, isFinished]);

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
            <motion.img
              src="/eml1.png"
              className="w-[15rem] h-[15rem] rounded-full object-cover mb-6 lg:mb-0"
              alt="logo"
              variants={fadeInUp}
            />
            <motion.div className="text-center lg:text-left" variants={fadeInUp}>
              <motion.h1 className="w-full lg:w-[28rem] font-[merriweather] font-bold text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] text-[#1D4F7C] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" variants={fadeInUp}>
                <span>{text}</span>
                {!isFinished && <span className="inline-block md:w-1 w-[3px] h-7 md:h-11 bg-gradient-to-b from-red-500 to-blue-500 animate-pulse ml-1"></span>}
              </motion.h1>
              <motion.p className="w-full lg:w-[20rem] font-[merriweather] font-normal text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] lg:leading-[1.75rem] text-black" variants={fadeInUp}>
                IIT Hyderabad
              </motion.p>
            </motion.div>
          </motion.div>
          {/* Quote - Appears only when "EXTRA-MURAL LECTURES" is fully typed */}
          {isFinished && (
            <motion.p
              className="text-center font-playfair italic font-normal mt-5 text-[1rem] md:text-[2rem] lg:text-[2.25rem] leading-none text-[#1D4F7C] whitespace-nowrap"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              “Learn beyond the four walls of a classroom”
            </motion.p>
          )}
        </motion.div>
      </div>

      <motion.div className="relative mx-auto flex justify-center items-center top-2 md:top-6 w-full" variants={fadeInUp}>
        <Animation />
      </motion.div>
    </motion.section>
  );
}

export default Hero;