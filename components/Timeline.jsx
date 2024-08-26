"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; 
import Modal from "@/components/Modal.jsx"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
};

const years = [{
    year: "2020",
    title: "The Beginning",
    text: "In 2020, during the COVID-19 pandemic, I enrolled in a web development bootcamp where I gained a solid foundation in HTML, CSS, and JavaScript. This experience not only strengthened my technical skills but also reignited my passion for continuous learning and self-improvement. Upon completing the program, I felt confident in my ability to advance in the field and quickly transitioned into learning React to further enhance my capabilities as a developer."
},
{
    year: "2021",
    title: "Rise",
    text: "In 2021, I embarked on my first professional role as a Junior Front-End Developer, marking a significant milestone in my career. This position provided me with invaluable hands-on experience and the opportunity to apply the skills I had acquired in a real-world setting. From the very first day, I felt a deep sense of validation in my decision to transition into web development. The dynamic environment and the challenges I encountered confirmed that this was the right path for me, allowing me to grow both professionally and personally. It was an exciting and rewarding experience that laid a strong foundation for my future in the tech industry."
},
{
    year: "2022",
    title: "New Challanges",
    text: "In 2022, my wife and I made the decision to relocate to the UK, which meant I had to leave my job. We moved to Manchester and began the process of settling into our new life. This transition brought both excitement and new challenges as we adjusted to a different environment and culture, while also planning the next steps in my professional journey."
},
{
    year: "2023",
    title: "Adaption",
    text: "In 2023, when we first moved to the UK, the priority was settling in, so I accepted the first job offer that came my way, even though it wasn't in a field where I wanted to grow my career long-term. While I gained valuable experience, I knew it wasn’t aligned with my aspirations as a developer. Despite this, I continued to work on freelance projects as a developer during that time, staying actively engaged with the latest technologies and trends in the industry. This freelance work not only kept my skills sharp but also allowed me to continue building a diverse portfolio of projects. Once everything in our personal lives had settled and we established a sense of stability, I refocused my efforts on pursuing my passion in web development. I began actively seeking opportunities as a Front-End Developer, eager to return to a role that aligns with my professional goals and leverages the skills I've honed over the years."
},
{
    year: "2024",
    title: "The Return",
    text: "In 2024, I successfully secured a position as a Front-End Developer in the UK, and I am currently thriving in this role. I work closely with backend developers and designers as part of a highly collaborative team. Together, we are building something truly incredible, and I am thrilled to be a part of this exciting journey. In my spare time, I focus on strengthening my backend development skills, specifically working with Python, FastAPI, and PostgreSQL. One of my short-term goals is to become proficient and comfortable as a Full-Stack Developer. By broadening my technical expertise, I aim to contribute even more effectively to future projects and continue evolving in my career.   "
}]

export default function Timeline() {

  const horizontalRef = useRef(null);
  const verticalRef = useRef(null);

  const isHorizontalInView = useInView(horizontalRef, { once: true, margin: "0px 0px -100px 0px" });
  const isVerticalInView = useInView(verticalRef, { once: true, margin: "0px 0px -100px 0px" });

  const [selectedYear, setSelectedYear] = useState('');

  const openModal = (year) => {
    const data = years.find((data) => data.year === year);
    setSelectedYear(data || null);
  };

  const closeModal = () => {
    setSelectedYear(null);
  };

  return (
    <>
      <div className="relative overflow-hidden">

        <div className="absolute">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
  

        <motion.div
          ref={horizontalRef} 
          className="w-[100%] px-5 md:px-10  md:flex justify-center items-center gap-3 hidden min-h-[300px]"
          variants={containerVariants}
          initial="hidden"
          animate={isHorizontalInView ? "visible" : "hidden"} 
        >
          <motion.div
            className="md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
            onClick={() => openModal("2020")}
          >
            2020
          </motion.div>
          <hr className="w-32 lg:w-48 2xl:w-72 h-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
            onClick={() => openModal("2021")}
          >
            2021
          </motion.div>
          <hr className="w-32 lg:w-48 2xl:w-72 h-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
            onClick={() => openModal("2022")}
          >
            2022
          </motion.div>
          <hr className="w-32 lg:w-48 2xl:w-72 h-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
            onClick={() => openModal("2023")}
          >
            2023
          </motion.div>
          <hr className="w-32 lg:w-48 2xl:w-72 h-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
            onClick={() => openModal("2024")}
          >
            2024
          </motion.div>
        </motion.div>
  

        <motion.div
          ref={verticalRef}
          className="w-[100%] px-5 md:px-10 my-16 lg:my-20 2xl:my-32 flex flex-col justify-center items-center gap-3 md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isVerticalInView ? "visible" : "hidden"} 
        >
          <motion.div
            className="w-[60px] h-[60px] md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
          >
            2020
          </motion.div>
          <hr className="h-16 lg:h-48 2xl:h-72 w-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="w-[60px] h-[60px] md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
          >
            2021
          </motion.div>
          <hr className="h-16 lg:h-48 2xl:h-72 w-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="w-[60px] h-[60px] md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
          >
            2022
          </motion.div>
          <hr className="h-16 lg:h-48 2xl:h-72 w-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="w-[60px] h-[60px] md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
          >
            2023
          </motion.div>
          <hr className="h-16 lg:h-48 2xl:h-72 w-[1px] bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
          <motion.div
            className="w-[60px] h-[60px] md:w-[40px] md:h-[40px] md:text-sm lg:text-base lg:w-[60px] lg:h-[60px] 2xl:w-[70px]  2xl:h-[70px] rounded-[50%] bg-[#012218] text-white flex justify-center items-center text-sm cursor-pointer"
            variants={itemVariants}
          >
            2024
          </motion.div>
        </motion.div>
        
        {selectedYear && (
          <Modal
            isOpen={selectedYear !== null}
            onClose={closeModal}
            year={selectedYear.year}
            text={selectedYear.text}
            title={selectedYear.title}
          />
        )}
      </div>
    </>
  );
        }  