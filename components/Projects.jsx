import React from 'react'
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
import quiz from '@/images/quiz.png'
import Image from 'next/image'
import Link from 'next/link'
import booknote from '@/images/Booknote.png'
import ozdemir from '@/images/ozdemir.png'
import gunes from '@/images/gunes.png'
import manchester from '@/images/visitmanchester.png'
import prisma from '@/images/prisma.png'
import aj from '@/images/aj.png'

export default function Projects() {
  return (
    <>
        <div id='projects' className='mt-20 w-[90%] text-center text-4xl text-[#FFAA00] border-b border-black dark:border-white pb-4 mx-auto'>Projects</div>
    <div className='w-full p-2' >
    <div className='max-w-[90%] mx-auto flex flex-col justify-center h-full'>
       <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto gap-20 mt-10'>

       <div className='py-3 px-3 my-8 rounded-lg max-w-sm dark:bg-white bg-[#393e46] shadow-lg shadow-gray-400'>
      <Image src={gunes} alt='quiz' />
      <h3 className='text-2xl my-2 text-center text-white dark:text-black'>Memory Website (full-stack)</h3>
      <p className='my-2 dark:text-gray-500 text-gray-300 flex justify-start items-center text-sm h-36'>I created this website for my nephew's 2nd birthday. It's an interactive memory book for family members to log in, share messages and photos. It includes a section for his first words and meanings, as well as a monthly progress gallery. Parents have an admin panel for content and user management. Username: Nenem Password: nenem123</p>
      <hr />
        <div className='flex justify-start py-2 my-2'>
        <Image className='mx-1' src={html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={tailwind} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={react} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={nextjs} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={mongo} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={postman} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
            <Link href='https://github.com/Kursatkeskin96/memory-blog' target="_blank" >
        <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-[#242424] rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://gunesozdemir.vercel.app/' target="_blank" >
        <button className='p-1 w-20 text-[#FFAA00] hover:bg-gray-800 bg-black border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>
        
     
       <div className='py-3 px-3 my-8 rounded-lg max-w-sm dark:bg-white bg-[#393e46] shadow-lg shadow-gray-400'>
      <Image src={ozdemir} alt='quiz' />
      <h3 className='text-2xl my-2 text-center text-white dark:text-black'>Law Firm Website</h3>
      <p className='my-2  dark:text-gray-500 text-gray-300 flex justify-start items-center text-sm h-36'>This website has been developed for a law firm located in Turkey. The platform seamlessly integrates language support for both Turkish and English, ensuring that clients and visitors can engage with the content in their preferred language. The site is currently live and accessible on hukukozdemir.com to users.</p>
      <hr />
        <div className='flex justify-start py-2 my-2'>
        <Image className='mx-1' src={html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={tailwind} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={react} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={nextjs} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
            <Link href='https://github.com/Kursatkeskin96/ozdemirhukuk' target="_blank" >
            <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-[#242424] rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://www.hukukozdemir.com/en' target="_blank" >
        <button className='p-1 w-20 text-[#FFAA00] hover:bg-gray-800 bg-black border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>

       <div className='py-3 px-3 my-8 rounded-lg max-w-sm  dark:bg-white bg-[#393e46] shadow-lg shadow-gray-400'>
      <Image src={aj} alt='quiz' />
      <h3 className='text-2xl my-2 text-center text-white dark:text-black'>Albion Journey</h3>
      <p className='my-2 dark:text-gray-500 text-gray-300 flex justify-start items-center text-sm'>This full-stack project is designed for Albion Online enthusiasts, providing a comprehensive database and analytics tool. The platform is geared towards managing extensive game data and honing SEO strategies with the goal of reaching 30K monthly visitors. It serves as a practice ground for scaling and SEO optimization, tailored to the needs of the game's community. This is a private repository. If you would like to see the code, please reach out to me.</p>
      <hr />
        <div className='flex justify-start py-2 my-2'>
        <Image className='mx-1' src={html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={tailwind} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={react} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={nextjs} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={mongo} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={postman} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={prisma} alt='javascript' width={12} height={12} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
        <button disabled className='p-1 w-20 bg-[#FFAA00] border-[1px] border-black text-[#242424] rounded-lg'>Code</button>
        </div>
        <div className='px-2'>
        <Link href='https://www.albionjourney.com/' target="_blank" >
        <button className='p-1 w-20 text-[#FFAA00] hover:bg-gray-800 bg-black border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>

       <div className='py-3 px-3 my-8 rounded-lg max-w-sm dark:bg-white bg-[#393e46] shadow-lg shadow-gray-400'>
      <Image src={booknote} alt='quiz' />
      <h3 className='text-2xl my-2 text-white dark:text-black text-center'>Book Note App (full-stack)</h3>
      <p className='my-2 dark:text-gray-500 text-gray-300 flex justify-start items-center text-sm'>This application integrated with the Google Books API, offers a seamless way for users to search and discover a wide range of books. It allows users to add their favorite reads to a personal library and enrich their reading experience by adding custom notes to any book. This feature is particularly useful for capturing thoughts and insights while reading, making our platform not just a library, but a personal reading companion.</p>
      <hr />
        <div className='flex justify-start py-2 my-2'>
        <Image className='mx-1' src={html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={tailwind} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={react} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={nextjs} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={mongo} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={postman} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
            <Link href='https://github.com/Kursatkeskin96/booknoteapp' target="_blank" >
            <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-[#242424] rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://booknoteapp.vercel.app/' target="_blank" >
        <button className='p-1 w-20 text-[#FFAA00] hover:bg-gray-800 bg-black border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>

      </div>
      </div>
      </div>
      </>
  )
}
