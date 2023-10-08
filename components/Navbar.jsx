
"use client"; 

import Link from 'next/link';
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Navbar() {

const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)
}

  return (
    <div className='fixed w-full h-14 shadow-xl z-[100] bg-[#111111]  text-[#FFFFFF] p-4'>
     <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='#home'>
      <span className='font hover:border-b hover:border-[#FFAA00]'>kursatkeskin.com</span>
      </Link>
      <div>
        <ul className='hidden md:flex'>
          <Link href='#home'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#FFAA00] text-[#FFAA00]'>Home</li>
          </Link>
          <Link href='#about'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#FFAA00]'>About</li>
          </Link>
          <Link href='#skills'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#FFAA00]'>Skills</li>
          </Link>
          <Link href='#projects'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#FFAA00]'>Projects</li>
          </Link>
          <Link href='#contact'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#FFAA00]'>Contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
     </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70  text-black ' : ''}> 
      <div className={nav 
      ? 'fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ' 
      : 'fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500 ' }>
        <div>
          <div className='flex items-center justify-between'>
            <span className='font'>kursatkeskin.com</span>
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-[#FFAA00] pt-3 my-4'>

          </div>
        </div>
        <div className='flex flex-col'>
          <ul className='uppercase'>
            <Link href='#home'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='#about'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
            </Link>
            <Link href='#skills'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='#projects'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
            </Link>
            <Link href='#contact'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>
          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#FFAA00]'>Lets connect</p>
            <div className='flex items-center justify-start my-4 w-full sm:w=[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <Link target='_blank' href='https://www.linkedin.com/in/kursatkeskinn/'>
              <FaLinkedinIn />
              </Link>
              </div>
              <div className='rounded-full mx-4 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
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