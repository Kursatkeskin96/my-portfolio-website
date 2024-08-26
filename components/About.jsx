"use client";
import React, { useRef } from "react";
import Image from "next/image";
import kursat2 from "@/images/me.webp";
import { motion, useInView } from "framer-motion";
import { Spotlight } from "./Spotlight";

export default function About() {
  // Refs for both sections (image and text)
  const refImage = useRef(null);
  const refText = useRef(null);

  // Check if both sections are in view
  const isInViewImage = useInView(refImage, { once: true });
  const isInViewText = useInView(refText, { once: true });

  return (
    <>
      <div
        id="about"
        className="aboutbg dark:bg-black text-white w-[100%] px-5 md:px-10 mx-auto pb-32 flex justify-around items-center flex-wrap"
      >
        <Spotlight
          className="-top-40 left-0 md:left-40 md:-top-20 hidden md:flex"
          fill="white"
        />
        <motion.div
          ref={refImage}
          initial={{ opacity: 0, y: 100 }}
          animate={isInViewImage ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-10 lg:mt-0 md:mt-0 hidden md:flex"
        >
          <div className="relative bg-[#012218] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-[15px] hidden lg:flex md:mb-20 lg:mb-0">
            <div className="absolute bottom-5 left-5 w-full h-full">
              <Image
                src={kursat2}
                alt="kursat"
                fill
                className="object-cover rounded-[15px]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={refText}
          initial={{ opacity: 0, y: 100 }}
          animate={isInViewText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:max-w-[55%] flex justify-center flex-col"
        >
          <h2 className="text-center w-full text-3xl md:mb-5 lg:mb-10 nato-serif font-bold text-[#FFC217] nato-serif tracking-wider">
            About Me
          </h2>
          <p className="mt-4 lg:mt-0 text-black dark:text-[#d4d4d4] rubik text-center lg:text-left rubik">
            I am currently working for Boshhh UK and expanding my knowledge in
            Python and FastAPI to become a full-stack developer. I have a strong
            passion for learning, which allows me to stay up-to-date with the
            latest technologies. I closely follow advancements in the tech
            world. One of my greatest strengths is the ability to develop
            projects in an unfamiliar programming language by reading its
            documentation and quickly adapting. As a developer, I understand
            that it's not enough to only write good and clean code; having
            strong social skills is equally important. Effective communication
            is crucial for me, and I consider myself a good team player.
          </p>
        </motion.div>
      </div>
    </>
  );
}
