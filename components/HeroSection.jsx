"use client";
import Image from "next/image";
import React from "react";
import kursat from "@/images/kursat.jpeg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="lg:mb-0 md:mb-0 min-h-screen dark:bg-white bg-white px-5 md:px-10 dark:text-white text-black w-[100%] mx-auto flex justify-around pb-[100px] pt-[70px] items-center flex-wrap headerbg">
      <motion.div
        initial={{ opacity: 0, z: 100 }}
        animate={{ opacity: 1, z: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:max-w-[45%]"
      >
        <h1 className="text-5xl text-center bg-gradient-to-r from-[#FFC217] to-[#f3bc3e] bg-clip-text text-transparent nato-serif">
          Hi, I'm Kursat.
        </h1>
        <h2 className="text-2xl md:text-3xl italic text-center bg-gradient-to-r from-[#fddacb] to-[#FFDE81] bg-clip-text text-transparent rubik my-2">
          F
          <Typewriter
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={3000}
            words={["ront-end Web Developer"]}
            loop={0}
          />
        </h2>
        <p className="mt-7 text-black dark:text-[#D7D7D7] text-center rubik">
          I'm an ambitious developer who loves learning new things and staying
          up-to-date with the latest technologies. I enjoy taking on challenges
          and, while I'm already strong in front-end development, I'm now
          working on growing my back-end skills to become a full-stack
          developer.
        </p>

        <div className="my-6 flex justify-center items-center">
          <button className="rubik flex justify-center items-center gap-3 w-[200px] hover:bg-[#f6ce61] h-[50px] rounded-[15px] bg-[#FFC217] text-black">
            Download CV{" "}
            <span>
              <BsDownload className="font-bold text-lg pb-[2px]" />
            </span>
          </button>
        </div>

        <div className="flex justify-center items-center mt-4">
          <Link
            aria-label="GitHub profile"
            target="_blank"
            href="https://github.com/Kursatkeskin96"
          >
            <AiFillGithub className="cursor-pointer text-2xl mx-2 hover:scale-125 ease-in-out duration-200" />
          </Link>
          <Link
            aria-label="LinkedIn profile"
            target="_blank"
            href="https://www.linkedin.com/in/kursatkeskinn/"
          >
            <AiOutlineLinkedin className="text-2xl cursor-pointer hover:scale-125 ease-in-out duration-200" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10 lg:mt-0 md:mt-0 hidden md:flex"
      >
        <div className="relative bg-[#FFC217] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-[15px] mt-20 lg:mt-0">
          <div className="absolute top-5 right-5 w-full h-full">
            <Image
              src={kursat}
              alt="kursat"
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
