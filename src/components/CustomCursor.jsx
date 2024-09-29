// src/components/CustomCursor.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");

    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: "back.out"
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="h-[2vw] w-[2vw] bg-[#658352] rounded-full fixed pointer-events-none z-50"
    ></div>
  );
};

export default CustomCursor;
