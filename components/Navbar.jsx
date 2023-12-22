"use client"; 

import Link from 'next/link';
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { useTheme } from 'next-themes';
import ThemeButton from './ThemeButton';


function Navbar() {

const {resolvedTheme, setTheme} = useTheme()

const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)
}

  return (
    <div className='fixed w-full h-14 shadow-xl z-[100] dark:bg-[#111111] bg-white text-[#FFFFFF] p-4'>
     <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='#home'>
      <span className='font hover:border-b text-black dark:text-white hover:border-[#FFAA00]'>kursatkeskin.com</span>
      </Link>
      <div>
        <div className='hidden md:flex'>
          <Link href='#home'>
            <div className='ml-10 text-sm uppercase hover:border-b hover:border-[#FFAA00] text-[#FFAA00]'>Home</div>
          </Link>
          <Link href='#about'>
            <div className='ml-10 text-sm uppercase text-black dark:text-white  hover:border-b hover:border-[#FFAA00]'>About</div>
          </Link>
          <Link href='#skills'>
            <div className='ml-10 text-sm uppercase text-black dark:text-white hover:border-b hover:border-[#FFAA00]'>Skills</div>
          </Link>
          <Link href='#projects'>
            <div className='ml-10 text-sm uppercase  text-black dark:text-white hover:border-b hover:border-[#FFAA00]'>Projects</div>
          </Link>
          <Link href='#contact'>
            <div className='ml-10 text-sm uppercase  text-black dark:text-white hover:border-b hover:border-[#FFAA00]'>Contact</div>
          </Link>
          <div className='ml-5 text-sm'><ThemeButton /></div>
        </div>

        <div className='flex justify-between items-center gap-6'>
          <div className='md:hidden'><ThemeButton /></div>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu className='text-black dark:text-white' size={25} />
        </div>
        </div>
      </div>
     </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  text-black ' : ''}> 
      <div className={nav 
      ? 'fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%]  h-screen bg-[#ecf0f3] dark:bg-black p-10 ease-in duration-500 ' 
      : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 ' }>
        <div>
          <div className='flex  items-center justify-between'>
            <span className='font dark:text-white'>kursatkeskin.com</span>
            <div onClick={handleNav} className='rounded-full shadow-lg dark:bg-white shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-[#FFAA00] pt-3 my-4'>

          </div>
        </div>
        <div className='flex flex-col'>
          <div className='uppercase'>
            <Link href='#home'>
             <div onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>Home</div>
            </Link>
            <Link href='#about'>
             <div onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>About</div>
            </Link>
            <Link href='#skills'>
              <div onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>Skills</div>
            </Link>
            <Link href='#projects'>
              <div onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>Projects</div>
            </Link>
            <Link href='#contact'>
              <div onClick={() => setNav(false)} className='py-4 text-sm dark:text-white'>Contact</div>
            </Link>
          </div>
          <div className=' pt-28'>
            <p className='uppercase tracking-widest text-[#FFAA00]'>Lets connect</p>
            <div className='flex items-center justify-start my-4 w-full sm:w=[80%]'>
              <div className='rounded-full shadow-lg dark:bg-white shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link target='_blank' href='https://www.linkedin.com/in/kursatkeskinn/'>
              <FaLinkedinIn />
              </Link>
              </div>
              <div className='rounded-full mx-4 shadow-lg dark:bg-white shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link target='_blank' href='https://github.com/Kursatkeskin96'>
              <FaGithub />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar;