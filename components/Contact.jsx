'use client'
import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import contact from '@/images/contact.svg'
import Image from 'next/image'
import Link from 'next/link';
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {

  const [submitting,setSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        form.current.reset();
        setShowSuccessMessage(true); // Show success message after form submission
      }, 5000);
  
      emailjs.sendForm('service_9t81sgi', 'template_0h6uk68', form.current, 'tGF9oprXEkoV0KmnQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
<>
<div id='contact' className='flex justify-around items-center flex-wrap w-[100%] contactbg py-[70px] pt-20'>
  {/* Left column */}
  <div className='flex flex-col justify-between min-h-[300px] md:items-start items-center px-5'>
    <div className='flex flex-col justify-start md:items-start items-center'>
      <h4 className="text-white mb-2 nato-serif text-2xl">Let's Talk</h4>
      <p className="text-[#D9D9D9] mb-4 rubik text-center">Send me a message and I'll get back to you as soon as possible.</p>
    </div>

    <div className='flex flex-col justify-start md:items-start items-center'>
      <h5 className="text-white mb-2 nato-serif text-2xl">E-mail</h5>
      <p className="text-[#D9D9D9] mb-4 rubik">kursatkeskinn@gmail.com</p>
    </div>

    <div className="flex justify-center items-center mt-4">
      <Link
        aria-label="GitHub profile"
        target="_blank"
        href="https://github.com/Kursatkeskin96"
      >
        <AiFillGithub className="cursor-pointer text-3xl mx-2 hover:scale-125 ease-in-out duration-200 text-white" />
      </Link>
      <Link
        aria-label="LinkedIn profile"
        target="_blank"
        href="https://www.linkedin.com/in/kursatkeskinn/"
      >
        <AiOutlineLinkedin className="text-3xl cursor-pointer hover:scale-125 ease-in-out duration-200 text-white" />
      </Link>
    </div>
  </div>

  {/* Right column */}
  <div className='text-white flex justify-start md:justify-center items-start md:items-center flex-col pt-10 md:pt-0'>
  <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-start items-start my-10 nato-serif"> 
    <label htmlFor='user_name' className="mb-2 text-left text-gray-200">Full Name</label>
    <input 
      id='user_name' 
      type="text" 
      required 
      name='user_name' 
      className="mb-4  bg-transparent border-b-2 border-gray-400 text-white focus:outline-none focus:border-white lg:w-96 w-80" 
    />
    
    <label htmlFor='user_email' className="mb-2 mt-8 text-left text-gray-200">E-mail</label>
    <input 
      id='user_email' 
      type="email" 
      required 
      name='user_email' 
      className="mb-4  bg-transparent border-b-2 border-gray-400 text-white focus:outline-none focus:border-white lg:w-96 w-80" 
    />
    
    <label htmlFor='message' className="mb-2 mt-8 text-left text-gray-200">Message</label>
    <textarea 
      id='message' 
      type="text" 
      required 
      name='message' 
      className="mb-4 resize-none bg-transparent border-b-2 border-gray-400 text-white focus:outline-none focus:border-white lg:w-96 w-80" 
    />


    
    <button className='p-1 lg:w-96 w-80 h-12 mt-8 hover:bg-gray-200 bg-white border border-[#05875C] text-[#05875C]  rounded-lg'>
      {submitting ? 'Submitting...' : 'Submit'}
    </button>
    </form>

    {showSuccessMessage && (
      <div className="bg-green-500 text-white p-2 text-center my-4 w-full rounded-lg">
        Message has been sent.
      </div>
    )}
  </div>
</div>

</>

  )
}
