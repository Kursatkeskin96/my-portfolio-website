'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Optional for animating the button
import { FaArrowUp } from 'react-icons/fa';  // Optional icon for the button

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Smooth scrolling
    });
  };

  // Add a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);  // Cleanup the event listener
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 right-10 bg-[#00563A] text-white p-3 rounded-full shadow-lg cursor-pointer hidden md:flex"
          initial={{ opacity: 0, scale: 0.5 }}  // Animation when appearing
          animate={{ opacity: 1, scale: 1 }}  // Animation when visible
          whileHover={{ scale: 1.1 }}  // Animation on hover
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </motion.div>
      )}
    </>
  );
}
