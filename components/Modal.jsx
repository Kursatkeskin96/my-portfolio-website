import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, year, text, title }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5, y: "-50%", x: "-50%" },
    visible: {
      opacity: 1,
      scale: 1,
      y: "-50%",
      x: "-50%",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: "-50%",
      x: "-50%",
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={onClose}
          ></div>

          <motion.div
            className="fixed w-[80%] max-h-[80%] lg:w-[500px] py-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-100 text-black p-5 rounded-lg shadow-lg overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "center" }}
          >
            <button
              className="absolute text-[#012218] top-2 right-4 text-2xl cursor-pointer"
              onClick={onClose}
            >
              &times;
            </button>

            <div className="flex flex-col justify-center mx-auto items-center flex-wrap lg:flex-nowrap max-w-[90%]">
              <div className="flex flex-col justify-center mx-auto items-center mt-4">
                <h2 className="mt-4 text-2xl nato-serif font-bold text-center">
                  {title}{" "}
                  <span className="text-sm italic text-gray-500">({year})</span>
                </h2>
                <hr className="w-full h-[2px] mx-auto bg-[#012218] border-0 rounded my-8"></hr>
                <p className="text-sm text-left rubik text-gray-500">{text}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
