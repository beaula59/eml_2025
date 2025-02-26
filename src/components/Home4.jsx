"use client";
import React from "react";
import CardCarousel from "./CardCarousel";
import Wave from "./WaveAnimation";
import { motion } from "framer-motion";

const SpeakersSection = () => {

  const recent_talks_data = [
    {
      id: 1,
      image: "/images/home/recent-talks/img1.png",
      title: "Dr. HC Verma",
      description: "Indian physicist and author"
    },
    {
      id: 2,
      image: "/images/home/recent-talks/img2.png",
      title: "Dr. Kiran Seth",
      description: "Founder, SPICMACAY"
    },
    {
      id: 3,
      image: "/images/home/recent-talks/img3.png",
      title: "Prof. EV Swaminathan",
      description: "Mental Health Advocate"
    },
    {
      id: 4,
      image: "/images/home/recent-talks/img4.png",
      title: "Lt. Gen. Kanwal Jeet Singh Dhillon",
      description: "Retd. General Officer, Indian Army"
    },
  ];

  const past_speaker_data = [
    {
      id: 1,
      image: "/images/home/past-speakers/img1.png",
      title: "Dr Richard Stallman",
      description: "Founder, Free Software"
    },
    {
      id: 2,
      image: "/images/home/past-speakers/img2.png",
      title: "Padmanabhan Balaram",
      description: "Former Director, IISC Bangalore"
    },
    {
      id: 3,
      image: "/images/home/past-speakers/img3.png",
      title: "Pullela Gopichand",
      description: "Indian former badminton player"
    },
    {
      id: 4,
      image: "/images/home/past-speakers/img4.png",
      title: "S. P. Balasubrahmanyam",
      description: "Indian playback singer and TV show host"
    },  
  ];

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-5 md:p-10 md:my-20">

      {/* Past Speakers Section */}
      <div className="w-full md:w-1/2 text-center flex flex-col justify-between">
        <div className="absolute flex flex-col top-0 left-0 md:mb-[80px]">
          <Wave />
        </div>
        <h2 className="relative mt-[7rem] md:mt-0 mb-5 md:mb-6 text-3xl md:text-4xl font-bold text-[#0C223F] drop-shadow-lg font-[merriweather]">
          PAST SPEAKERS
        </h2>

        {/* Updated Scale-Up Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <CardCarousel data={past_speaker_data} />
        </motion.div>
      </div>

      {/* Recent Talks Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center flex flex-col-reverse md:flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <CardCarousel data={recent_talks_data} />
        </motion.div>

        <h2 className="mt-[390px] md:mt-[380px] relative mb-5 md:mb-12 text-3xl md:text-4xl font-bold text-[#0C223F] drop-shadow-lg font-[merriweather]">
          RECENT TALKS
        </h2>
        <div className="absolute mt-[500px] md:mt-[737px] flex flex-col right-0 rotate-180">
          <Wave color="#5373A6" />
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;


