'use client'
import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import contact from '@/images/contact.svg'
import Image from 'next/image'

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
  <div id='contact' className='max-w-[90%] mt-20 text-center text-4xl text-[#FFAA00] border-b dark:border-white border-black pb-4 mx-auto'>CONTACT</div>
  <div className='mx-auto flex justify-around items-center flex-wrap'>
    <div className='mt-10 lg:mt-0 md:mt-0'> 
      <Image src={contact} width={300} alt='contact' />
    </div>
    <div className='dark:text-white flex justify-center items-center flex-col'>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-start items-start my-10"> 
        <label htmlFor='user_name' className="mb-2 text-left">Full Name</label>
        <input id='user_name' type="text" required name='user_name' className="mb-4 pl-2 dark:bg-white border border-black text-black lg:w-96 w-80" />
        <label  htmlFor='user_email' className="mb-2 text-left">E-mail</label>
        <input id='user_email' type="email" required name='user_email' className="mb-4 pl-2 dark:bg-white border border-black text-black lg:w-96 w-80" />
        <label htmlFor='message' className="mb-2 text-left">Message</label>
        <textarea id='message' type="text" required name='message' rows="4" className="mb-4 pl-2 dark:bg-white border border-black resize-none text-black lg:w-96 w-80" /> 
        <button className='p-1 lg:w-96 w-80 h-12 bg-[#FFAA00] hover:bg-[#f8ca6e]  text-black  rounded-lg'>{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>
      {showSuccessMessage && (
      <div className="bg-green-500 text-white p-2 text-center my-4">
        Message has been sent.
      </div>
    )}
    </div>
  </div>
</>

  )
}
