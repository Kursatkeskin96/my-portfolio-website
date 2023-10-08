'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import html from '@/images/html.png'
import css from '@/images/css.png'
import javascript from '@/images/javascript.png'
import tailwind from '@/images/tailwind.png'
import bootstrap from '@/images/bootstrap.png'
import git from '@/images/git.png'
import github from '@/images/github1.png'
import nextjs from '@/images/nextjs.png'
import react from '@/images/react.png'
import mongo from '@/images/mongodb.png'
import postman from '@/images/postman.png'
import figma from '@/images/figma.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Skills() {
  return (
    <>
    <div id='skills' className='max-w-[90%] text-center text-4xl text-[#FFAA00] border-b border-white pb-4 mx-auto'>SKILLS</div>
    <div className=''>
    <Swiper className='max-w-[90%] mt-10'
    modules={[ A11y, Autoplay]}
      speed={2000}
    autoplay={{
        delay: 0,
        disableOnInteraction: false 
      }}
    breakpoints={{
        // when window width is >= 640px
        360: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }} loop={true}
    >
      <SwiperSlide>
      <div className='hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg w-16 '>
      <Image src={html} alt='quiz' />
       </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={css} alt='quiz' />
       </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={javascript} alt='quiz' />
       </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={tailwind} alt='quiz' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={bootstrap} alt='quiz' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8  mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={react} alt='quiz' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={nextjs} alt='quiz' className='bg-white rounded-lg p-1' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={git} alt='quiz' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={github} alt='quiz' className='bg-white rounded-lg p-1' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={figma} alt='quiz' className='rounded-lg p-1' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={mongo} alt='quiz' className=' rounded-lg p-1' />
       </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className=' hover:scale-105 cursor-pointer duration-300 ease-in py-3 my-8 mb-12 mx-auto rounded-lg max-w-sm w-16'>
      <Image src={postman} alt='quiz' className='p-1' />
       </div>
    </SwiperSlide>

  </Swiper>
  </div>
    </>
  )
}

export default Skills