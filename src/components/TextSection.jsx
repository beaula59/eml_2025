// import React from 'react'
// import { motion } from "framer-motion";
// import Animation from './Animation';

// function TextSection() {
//   return (
//     <section className="bg-gray-50">
//     {/* <div className="flex justify-start top-10 rotate-180">
//       <Animation />
//     </div> */}
      
//     <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
//         <div className="mx-auto max-w-xl text-center text-primary font-playfair italic font-normal">
//             <h1 className="text-medium">
//             "We, the Extra Mural Lectures team at IIT Hyderabad,
//             </h1>
//             <p className="mt-0 mb-4 text-small">
//             work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives."
//             </p>
//         </div>
//     </div>
//     </section>
//   )
// }

// export default TextSection

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Animation from './Animation'; // assuming you want to include the custom Animation component

const TextSection = () => {
  return (
    <section className="bg-gray-50">
      {/* Optional Animation Component */}
      {/* <div className="flex justify-start top-10 rotate-180">
        <Animation />
      </div> */}

      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-primary font-playfair italic font-normal">
          <motion.h1
            className="text-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            "We, the Extra Mural Lectures team at IIT Hyderabad,
          </motion.h1>
          <motion.p
            className="mt-0 mb-4 text-small"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            work in bringing decorated personalities from eclectic domains on one platform to talk about various subjects like art, social work, economics, psychology, sports, science etc and inspire our IIT Hyderabad fraternity with insights that they could induce in their lives."
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
