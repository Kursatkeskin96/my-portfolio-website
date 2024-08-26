"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import html from "@/images/html.png";
import css from "@/images/css.png";
import javascript from "@/images/javascript.png";
import tailwind from "@/images/tailwind.png";
import bootstrap from "@/images/bootstrap.png";
import git from "@/images/git.png";
import github from "@/images/github1.png";
import nextjs from "@/images/nextjs.png";
import react from "@/images/react.png";
import typescript from "@/images/typescript.png";
import mongo from "@/images/mongodb.png";
import postgre from "@/images/postgre.png";
import postman from "@/images/postman.png";
import figma from "@/images/figma.png";
import nodejs from "@/images/nodejs.png";
import restapi from "@/images/restapi.webp";

function SkillIcon({ src, alt }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] relative bg-white rounded-[50%] flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image src={src} alt={alt} width={30} />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-[50px] md:bottom-[80px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-3 z-50 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {alt}
      </motion.div>
    </div>
  );
}

function Skills() {
  const skillData = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: javascript, alt: "JavaScript" },
    { src: tailwind, alt: "Tailwind" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: react, alt: "React" },
    { src: nextjs, alt: "Next.js" },
    { src: typescript, alt: "TypeScript" },
    { src: restapi, alt: "Rest API" },
    { src: nodejs, alt: "Node.js" },
    { src: mongo, alt: "MongoDB" },
    { src: postgre, alt: "PostgreSQL" },
    { src: figma, alt: "Figma" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: postman, alt: "Postman" },
  ];

  const refDesktop = useRef(null);
  const refMobile = useRef(null);

  const isInViewDesktop = useInView(refDesktop, { once: true });
  const isInViewMobile = useInView(refMobile, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div id="skills" className="max-w-[90%] mt-32 text-center pb-4 mx-auto">
        <h2 className="text-center w-full text-2xl md:text-3xl font-bold text-[#FFC217] tracking-wider">
          My Skill Set
        </h2>
        <p className="mt-3 text-gray-300 text-sm md:text-base">
          From design to deployment, these are the skills that make my projects
          shine.
        </p>
      </div>

      {/* For larger screens */}
      <motion.div
        ref={refDesktop}
        className="justify-center items-center lg:gap-10 flex-col py-20 hidden md:flex overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInViewDesktop ? "visible" : "hidden"} // Trigger animation based on if in view
      >
        {/* First row with 7 icons */}
        <div className="flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
          {skillData.slice(0, 7).map((skill) => (
            <motion.div
              key={skill.alt}
              className="cursor-grab"
              variants={containerVariants}
            >
              <SkillIcon src={skill.src} alt={skill.alt} />
            </motion.div>
          ))}
        </div>

        {/* Second row with 5 icons */}
        <div className="flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
          {skillData.slice(7, 12).map((skill) => (
            <motion.div key={skill.alt} variants={containerVariants}>
              <SkillIcon src={skill.src} alt={skill.alt} />
            </motion.div>
          ))}
        </div>

        {/* Third row with 4 icons */}
        <div className="flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
          {skillData.slice(12).map((skill) => (
            <motion.div key={skill.alt} variants={containerVariants}>
              <SkillIcon src={skill.src} alt={skill.alt} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* For smaller screens */}
      <motion.div
        ref={refMobile} // Attach the ref to the mobile div
        className="flex justify-center items-center gap-5 md:gap-10 flex-wrap py-20 md:hidden overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInViewMobile ? "visible" : "hidden"} // Trigger animation for mobile version
      >
        {skillData.map((skill) => (
          <motion.div key={skill.alt} variants={containerVariants}>
            <SkillIcon src={skill.src} alt={skill.alt} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Skills;
