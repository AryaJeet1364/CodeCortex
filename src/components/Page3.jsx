// import React from 'react'

// const Page3 = () => {
//   return (
//     <>
//       <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-gray1 via-gray4  to-gray6">
//         <h1 className="text-[3vw] font-extrabold pt-[3vw] mb-[5vw] ml-[6vw]">
//           The Problem
//         </h1>
//         <div
//           className="container h-[10vh] w-[40vw] ml-[10vw] mb-[5vw] bg-white rounded-[20px] shadow-lg transition-transform duration-300 ease-in-out"
//           style={{
//             transform: "rotate(-1deg)",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "rotate(-1deg) scale(1.05)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "rotate(-1deg)";
//           }}
//         >
//           <p className="pt-[0.2vw] pl-[1vw] text-[2.8vw]">
//             Do you often go to shopping?
//           </p>
//         </div>
//         <div
//           className="container h-[10vh] w-[95vw] ml-[2vw] mb-[5vw] bg-white rounded-[20px] shadow-lg transition-transform duration-300 ease-in-out"
//           style={{
//             transform: "rotate(3deg)",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "rotate(3deg) scale(1.05)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "rotate(3deg)";
//           }}
//         >
//           <p className="pt-[0.2vw] pl-[1vw] text-[2.8vw]">
//             Have you ever experienced frustration while waiting in a slow-moving
//             line?
//           </p>
//         </div>
//         <div
//           className="container h-[10vh] w-[92vw] ml-[5vw] mb-[5vw] bg-white rounded-[20px] shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl"
//           style={{
//             transform: "rotate(-2deg)",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "rotate(-2deg) scale(1.05)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "rotate(-2deg)";
//           }}
//         >
//           <p className="pt-[0.2vw] pl-[1vw] text-[2.8vw]">
//             Do you wish shopping could be a faster and more enjoyable
//             experience?
//           </p>
//         </div>
//         <div className="container h-[10vh] w-[95vw] ml-[5vw] mb-[20vw]">
//           <p className="pt-[0.2vw] pl-[1vw] text-[2vw]">
//             Are you ready for a checkout solution that saves you time and
//             improves your shopping experience?
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page3


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Guitar from "./Guitar.jsx"

const Page3 = () => {

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const questions = [
    "Do you often go shopping?",
    "Have you ever experienced frustration while waiting in a slow-moving line?",
    "Do you wish shopping could be a faster and more enjoyable experience?",
    "Are you ready for a checkout solution that saves you time and improves your shopping experience?",
  ];

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-r from-gray1 via-gray4  to-gray6">
        <div className="absolute "></div>

        <motion.h1
          className="absolute top-[3vw] left-[6vw] text-[3vw] font-extrabold text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The Problem
        </motion.h1>

        {questions.map((question, index) => (
          <motion.div
            key={index}
            className="absolute p-6 bg-gray-700 bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg cursor-pointer"
            style={{
              left: `${10 + index * 5}%`,
              top: `${22 + index * 15}%`,
              maxWidth: "70%",
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              {question}
            </p>
          </motion.div>
        ))}
      </div>
      <Guitar />
    </>
  );
};

export default Page3;