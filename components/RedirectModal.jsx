'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';

const RedirectModal = ({ onClose }) => {

  // Close the modal when the user clicks outside of the modal content
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  // Close the modal when the user presses the ESC key
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay">
      <div className="bg-white p-6 rounded-lg text-center w-[90%] md:w-[400px]">
        <h2 className="text-xl font-semibold text-black mb-2">Choose an Option</h2>
        <p className="mb-4 text-sm text-gray-400">Click on the buttons below to open the source code.</p>
        <div className='flex justify-center items-center gap-5'>
          <Link href='https://github.com/Kursatkeskin96/fastapi-crud' target='_blank'>
            <button 
              className="mb-2 w-full bg-[#00563A] text-white py-2 px-4 rounded hover:bg-[#0d7653]"
            >
              Backend
            </button>
          </Link>
          <Link href='https://github.com/Kursatkeskin96/dashboard' target='_blank'>
            <button 
              className="mb-2 w-full bg-[#00563A] text-white py-2 px-4 rounded hover:bg-[#0d7653]"
            >
              Front-end
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;
