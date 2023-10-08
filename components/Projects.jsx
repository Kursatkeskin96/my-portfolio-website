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

export default function Projects() {
  return (
    <>
        <div id='projects' className='mt-20 w-[90%] text-center text-4xl text-[#FFAA00] border-b border-white pb-4 mx-auto'>Projects</div>
    <div className='w-full p-2' >
    <div className='max-w-[90%] mx-auto flex flex-col justify-center h-full'>
       <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto gap-20 mt-10'>

       <div className='py-3 px-3 my-8 rounded-lg max-w-sm bg-white shadow-lg shadow-gray-400'>
      <Image src={gunes} alt='quiz' />
      <h3 className='text-2xl my-2 text-center'>Memory Website (full-stack)</h3>
      <p className='my-2 text-gray-500 flex justify-start items-center text-sm h-36'>I created this website for my nephew's 2nd birthday. It's an interactive memory book for family members to log in, share messages and photos. It includes a section for his first words and meanings, as well as a monthly progress gallery. Parents have an admin panel for content and user management. Username: Nenem Password: nenem123</p>
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
        <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-white rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://gunesozdemir.vercel.app/' target="_blank" >
        <button className='p-1 w-20 bg-white hover:bg-gray-200 text-[#FFAA00] border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>
        
     
       <div className='py-3 px-3 my-8 rounded-lg max-w-sm bg-white shadow-lg shadow-gray-400'>
      <Image src={ozdemir} alt='quiz' />
      <h3 className='text-2xl my-2 text-center'>Law Firm Website</h3>
      <p className='my-2 text-gray-500 flex justify-start items-center text-sm h-36'>This website has been developed for a law firm located in Turkey. The platform seamlessly integrates language support for both Turkish and English, ensuring that clients and visitors can engage with the content in their preferred language. The site is currently live and accessible on hukukozdemir.com to users.</p>
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
        <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-white rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://www.hukukozdemir.com/en' target="_blank" >
        <button className='p-1 w-20 bg-white hover:bg-gray-200 text-[#FFAA00] border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>

       <div className='py-3 px-3 my-8 rounded-lg max-w-sm bg-white shadow-lg shadow-gray-400'>
      <Image src={booknote} alt='quiz' />
      <h3 className='text-2xl my-2'>Book Note App (full-stack)</h3>
      <p className='my-2 text-gray-500 flex justify-start items-center text-sm'> Using the Google Books API, users can effortlessly search for their favorite books and add them to their personal library. Users can also add notes to their books that come to mind while reading.</p>
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
        <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-white rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://booknoteapp.vercel.app/' target="_blank" >
        <button className='p-1 w-20 bg-white hover:bg-gray-200 text-[#FFAA00] border-[1px] border-black rounded-lg'>Live</button>
        </Link>
        </div>
        </div>
       </div>

       <div className='py-3 px-3 my-8 rounded-lg max-w-sm bg-white shadow-lg shadow-gray-400'>
      <Image src={manchester} alt='quiz' />
      <h3 className='text-2xl my-2'>Visit Manchester</h3>
      <p className='my-2 text-gray-500 flex justify-start items-center text-sm'>This project showcases my ability to create responsive and dynamic websites using React, featuring impressive JavaScript animations and advanced routing systems.</p>
      <hr />
        <div className='flex justify-start py-2 my-2'>
        <Image className='mx-1' src={html} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={css} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={javascript} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={react} alt='javascript' width={16} height={16} />
        <Image className='mx-1' src={bootstrap} alt='javascript' width={16} height={16} />
        </div>
        <div className='flex justify-center my-4'>
          <div className='px-2'>
            <Link href='https://github.com/Kursatkeskin96/visitmanchester' target="_blank" >
        <button className='p-1 w-20 bg-[#FFAA00] hover:bg-[#f8ca6e] border-[1px] border-black text-white rounded-lg'>Code</button>
        </Link>
        </div>
        <div className='px-2'>
        <Link href='https://visitmanchester.netlify.app/' target="_blank" >
        <button className='p-1 w-20 bg-white hover:bg-gray-200 text-[#FFAA00] border-[1px] border-black rounded-lg'>Live</button>
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
