"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import html from "@/images/html.png";
import css from "@/images/css.png";
import tailwind from "@/images/tailwind.png";
import nextjs from "@/images/nextjs.png";
import react from "@/images/react.png";
import mongo from "@/images/mongodb.png";
import postman from "@/images/postman.png";
import cook from "@/images/cook.png";
import Image from "next/image";
import Link from "next/link";
import ozdemir from "@/images/ozdemir.png";
import python from "@/images/python.png";
import prisma from "@/images/prisma.png";
import aj from "@/images/aj.png";
import fastapi from '@/images/FastAPI.png'
import postgre from '@/images/postgre.png'
import RedirectModal from "./RedirectModal";
import pythonproject from '@/images/pythonproject.png'
import aws from '@/images/amazonwebservices.svg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="projectsbg">
      <div
        id="projects"
        className="mt-20 w-[90%] text-center text-3xl nato-serif font-bold text-[#FFC217] pb-4 mx-auto tracking-wider"
      >
        Explore My Work
      </div>
      <p className=" text-gray-300 w-[90%] text-center mx-auto rubik">
        Check out the creative solutions I've implemented in various projects.
        For more, please visit my github.
      </p>
      <div className="w-full p-2">
        <div className="max-w-[90%] mx-auto flex flex-col justify-center h-full">
          {/* Staggered animation container */}
          <motion.div
            ref={ref}
            className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-20 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Project Cards with animation */}
            <motion.div
              variants={cardVariants}
              className="py-6 px-6  my-8 rounded-lg max-w-sm  glass-bg "
            >
              <Image src={pythonproject} alt="quiz" className="rounded-lg" />
              <div className="flex justify-start gap-10 items-center pt-4">
                <div className="px-4 py-[2px] font-bold text-[10px] rounded-[20px] bg-[#C1E1C1] text-[#00563A] nato-serif">
                  full-stack
                </div>
                <h3 className="text-lg my-2 text-center text-white font-bold nato-serif">
                  Conference
                </h3>
              </div>
              <div className="flex justify-start py-6">
                <Image
                  className="mx-1"
                  src={html}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={css}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={tailwind}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={react}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={nextjs}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={python}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={fastapi}
                  alt="javascript"
                  width={16}
                  height={32}
                />
                <Image
                  className="mx-1"
                  src={postgre}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                                <Image
                  className="mx-1"
                  src={aws}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={postman}
                  alt="javascript"
                  width={16}
                  height={16}
                />
              </div>
              <hr className="w-full h-[1px] mx-auto mb-4 bg-[#ffc218] border-0 rounded"></hr>
              <p className="my-2 dark:text-gray-300 flex justify-start items-center text-sm h-36 rubik">
              A full-stack application using Next.js, FastAPI, and PostgreSQL for managing conference requests. It features secure authentication, a request submission form, and an admin dashboard for reviewing statistics and approving or rejecting requests. username: user@gmail.com password: test123


              </p>

              <div className="flex justify-center my-4">
                <div className="px-2">
       
                    <button onClick={handleOpenModal} className="p-1 w-32 bg-[#00563A] hover:bg-[#0c6c4c]   text-white rounded-lg">
                      Code
                    </button>

                </div>
                <div className="px-2">
                  <Link href="https://fullstack-conference-request.vercel.app/" target="_blank">
                    <button className="p-1 w-32 text-[#00563A] hover:bg-gray-200 bg-white border-[1px] border-[#00563A] rounded-lg">
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="py-6 px-6  my-8 rounded-lg max-w-sm  glass-bg "
            >
              <Image src={aj} alt="quiz" className="rounded-lg" />
              <div className="flex justify-start gap-10 items-center pt-4">
                <div className="px-4 py-[2px] font-bold text-[10px] rounded-[20px] bg-[#C1E1C1] text-[#00563A] nato-serif">
                  full-stack
                </div>
                <h3 className="text-lg my-2 text-center text-white font-bold nato-serif">
                  Albion Journey
                </h3>
              </div>
              <div className="flex justify-start py-6">
                <Image
                  className="mx-1"
                  src={html}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={css}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={tailwind}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={react}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={nextjs}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={mongo}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={postman}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={prisma}
                  alt="javascript"
                  width={12}
                  height={12}
                />
              </div>
              <hr className="w-full h-[1px] mx-auto mb-4 bg-[#ffc218] border-0 rounded"></hr>
              <p className="my-2 dark:text-gray-300 flex justify-start items-center text-sm h-36 rubik">
                This website is built for the Albion Online community. It
                features live market price data with graphs, a marketplace where
                players can sell their items, item crafting calculators, and
                guide blogs. 
              </p>
              <div className="flex justify-center my-4">
                <div className="px-2">
            <Link href='https://github.com/Kursatkeskin96/full-stack-game-tool' target="_blank">
            <div className="p-1 w-32 bg-[#00563A] text-center text-white rounded-lg">
                    Code
                  </div></Link>
                </div>
                <div className="px-2">
                  <Link href="https://www.albionjourney.com/" target="_blank">
                    <button className="p-1 w-32 text-[#00563A] bg-white border-[1px] hover:bg-gray-200 border-[#00563A] rounded-lg">
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="py-6 px-6  my-8 rounded-lg max-w-sm  glass-bg "
            >
              <Image src={cook} alt="quiz" className="rounded-lg" />
              <div className="flex justify-start gap-10 items-center pt-4">
                <div className="px-4 py-[2px] font-bold text-[10px] rounded-[20px] bg-[#C1E1C1] text-[#00563A] nato-serif">
                  full-stack
                </div>
                <h3 className="text-lg my-2 text-center text-white font-bold nato-serif">
                  Cook Weekly
                </h3>
              </div>
              <div className="flex justify-start py-6">
                <Image
                  className="mx-1"
                  src={html}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={css}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={tailwind}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={react}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={nextjs}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={mongo}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={postman}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={prisma}
                  alt="javascript"
                  width={12}
                  height={12}
                />
              </div>
              <hr className="w-full h-[1px] mx-auto mb-4 bg-[#ffc218] border-0 rounded"></hr>
              <p className="my-2 dark:text-gray-300 flex justify-start items-center text-sm h-36 rubik">
                This website idea came from a real-world problem I face: 'What
                to cook today.' I built a full-stack weekly meal planner to help
                solve this problem. We can add meals with their ingredients and
                assign them to specific days.
              </p>
              <div className="flex justify-center my-4">
                <div className="px-2">
                  <Link
                    href="https://github.com/Kursatkeskin96/cook-weekly"
                    target="_blank"
                  >
                    <button className="p-1 w-32 bg-[#00563A] hover:bg-[#0c6c4c] text-white rounded-lg">
                      Code
                    </button>
                  </Link>
                </div>
                <div className="px-2">
                  <Link href="https://cook-weekly.vercel.app/" target="_blank">
                    <button className="p-1 w-32 text-[#00563A] hover:bg-gray-200 bg-white border-[1px] border-[#00563A] rounded-lg">
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="py-6 px-6  my-8 rounded-lg max-w-sm  glass-bg "
            >
              <Image src={ozdemir} alt="quiz" className="rounded-lg" />
              <div className="flex justify-start gap-10 items-center pt-4">
                <div className="px-4 py-[2px] font-bold text-[10px] rounded-[20px] bg-[#C1E1C1] text-[#00563A] nato-serif">
                  front-end
                </div>
                <h3 className="text-lg my-2 text-center text-white font-bold nato-serif">
                  Law Firm Website
                </h3>
              </div>
              <div className="flex justify-start py-6">
                <Image
                  className="mx-1"
                  src={html}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={css}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={tailwind}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={react}
                  alt="javascript"
                  width={16}
                  height={16}
                />
                <Image
                  className="mx-1"
                  src={nextjs}
                  alt="javascript"
                  width={16}
                  height={16}
                />
              </div>
              <hr className="w-full h-[1px] mx-auto mb-4 bg-[#ffc218] border-0 rounded"></hr>
              <p className="my-2 dark:text-gray-300 flex justify-start items-center text-sm h-36 rubik">
                This website has been developed for a law firm located in
                Turkey. The platform seamlessly integrates language support for
                both Turkish and English, ensuring that clients and visitors can
                engage with the content in their preferred language. The site is
                currently live and accessible on hukukozdemir.com to users.
              </p>

              <div className="flex justify-center my-4">
                <div className="px-2">
                  <Link
                    href="https://github.com/Kursatkeskin96/lawfirm-website"
                    target="_blank"
                  >
                    <button className="p-1 w-32 bg-[#00563A]  hover:bg-[#0c6c4c] text-white rounded-lg">
                      Code
                    </button>
                  </Link>
                </div>
                <div className="px-2">
                  <Link href="https://www.hukukozdemir.com/en" target="_blank">
                    <button className="p-1 w-32 text-[#00563A] hover:bg-gray-200 bg-white border-[1px] border-[#00563A] rounded-lg">
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
        {isModalOpen && <RedirectModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}
