"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Card() {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={cardsRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex lg:justify-between 2xl:justify-evenly gap-20 pt-32 lg:gap-0 justify-center w-[90%] mx-auto items-center flex-wrap"
    >
      <motion.div
        variants={cardVariants}
        className="bg-[#00563A] hover:scale-105 w-[270px] h-[350px] rounded-[15px] relative border-l-4 border-b-4 border-[#05875C] flex flex-col justify-start items-center transition-transform duration-300 ease-in-out"
      >
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#0A0A0A] rounded-[50%] border-b-4 border-[#05875C]"></div>
        <h3 className="text-2xl font-bold pt-10">Passion</h3>
        <hr className="w-[85%] h-1 mx-auto border-0 rounded my-4 bg-[#FFC217]" />
        <p className="w-[90%] text-left">
          I bring a strong passion for technology and problem-solving to every
          project I work on. This passion drives me to constantly improve and
          stay engaged with the latest advancements in the field.
        </p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="bg-[#00563A] hover:scale-105 w-[270px] h-[350px] rounded-[15px] relative border-l-4 border-b-4 border-[#05875C] flex flex-col justify-start items-center transition-transform duration-300 ease-in-out"
      >
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#0A0A0A] rounded-[50%] border-b-4 border-[#05875C]"></div>
        <h3 className="text-2xl font-bold pt-10">Willingness to Learn</h3>
        <hr className="w-[85%] h-1 mx-auto border-0 rounded my-4 bg-[#FFC217]" />
        <p className="w-[90%] text-left">
          I am always eager to learn new skills, tools, and frameworks. Whether
          it's expanding my knowledge of front-end development or diving into
          backend technologies, I continuously seek out opportunities for
          growth.
        </p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="bg-[#00563A] hover:scale-105 w-[270px] h-[350px] rounded-[15px] relative border-l-4 border-b-4 border-[#05875C] flex flex-col justify-start items-center transition-transform duration-300 ease-in-out"
      >
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#0A0A0A] rounded-[50%] border-b-4 border-[#05875C]"></div>
        <h3 className="text-2xl font-bold pt-10">Soft Skills</h3>
        <hr className="w-[85%] h-1 mx-auto border-0 rounded my-4 bg-[#FFC217]" />
        <p className="w-[90%] text-left">
          Along with my technical expertise, I pride myself on having excellent
          communication and teamwork skills. I work effectively within
          cross-functional teams, collaborating with designers, developers, and
          stakeholders to deliver high-quality results.
        </p>
      </motion.div>
    </motion.div>
  );
}
