'use client'
import Image from 'next/image'
import React from 'react'
import kursat from '@/images/kursat.jpeg'
import {AiFillGithub, AiOutlineLinkedin} from 'react-icons/ai'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className='pt-20 mb-20 lg:mb-0 md:mb-0 h-screen dark:bg-black bg-white dark:text-white text-black w-[90%] mx-auto flex justify-around items-center flex-wrap'>
        <div className='lg:max-w-[45%]'>
            <h1 className='text-5xl text-center bg-gradient-to-r from-[#FFAA00] to-[#FBC4AC] bg-clip-text text-transparent'>Hi, I'm Kursat.</h1>
            <h2 className='text-3xl text-center bg-gradient-to-r from-[#fddacb] to-[#FFAA00] bg-clip-text text-transparent'>F<Typewriter   typeSpeed={70} deleteSpeed={70} delaySpeed={1000} words={["ront-end Web Developer"]} loop={0} /></h2>
            <p className='mt-4 text-black dark:text-[#F8FAFC] text-center'>As an ambitious web developer, I'm constantly seeking out new challenges and opportunities to grow my skills. I'm always eager to learn new technologies and tools, as I believe that continuous learning is key to staying competitive in the fast-paced world of web development.</p>
            <div className='flex justify-center items-center mt-4'>
            <Link aria-label='GitHub profile' target='_blank' href='https://github.com/Kursatkeskin96'>
    <AiFillGithub className='cursor-pointer text-2xl mx-2 hover:scale-125 ease-in-out duration-200' />
</Link>
<Link aria-label='LinkedIn profile' target='_blank' href='https://www.linkedin.com/in/kursatkeskinn/'>
    <AiOutlineLinkedin className='text-2xl cursor-pointer hover:scale-125 ease-in-out duration-200'/>
</Link>
            </div>
        </div>
        <div className='mt-10 lg:mt-0 md:mt-0 '>
          <div className='relative flex h-[300px] items-start justify-center before:absolute before:h-[295px] before:w-[340px] before: bg-gradient-to-l from-[#ffd072] to-[#FFAA00]'>
             <Image src={kursat} width={330} alt='kursat' className='z-10 mr-[10px]' /> 
        </div>
        </div>
    </div>
  )
}
