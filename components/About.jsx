import React from 'react'
import Image from 'next/image'
import kursat2 from '@/images/kursat2.svg'
export default function About() {
  return (
    <>
    <div id='about' className='max-w-[90%] md:mt-20 text-center text-4xl text-[#FFAA00] border-b dark:border-white border-black pb-4 mx-auto'>ABOUT ME</div>
    <div className='my-20 dark:bg-black text-white w-[90%] mx-auto flex justify-around items-center flex-wrap'>
    <div className='lg:mt-0 md:mt-0'>
            <Image src={kursat2} width={300} alt='kursat' />
        </div>
        <div className='lg:max-w-[55%]'>
            <h2 className='mt-12 lg:mt-0 text-center text-black dark:text-white'>I have a strong passion for learning, which allows me to stay up-to-date with the latest technologies. I closely follow advancements in the tech world. One of my greatest strengths is the ability to develop projects in an unfamiliar programming language by reading its documentation and quickly adapting. As a developer, I understand that it's not enough to only write good and clean code; having strong social skills is equally important. Effective communication is crucial for me. I consider myself a good team player. I currently based in Manchester, United Kingdom, and I am actively seeking new job opportunities. I am open to hybrid, remote, or on-site work arrangements.</h2>
        </div>
    </div>
    </>
  )
}
