import React from 'react';

const HoverButton = () => {
  return (
    <div className="relative group">
      <a
        href="#"
        className="flex justify-center items-center px-8 py-3 w-64 h-12 font-bold text-white text-center uppercase tracking-wide bg-gray-800 border-4 border-gray-800 transition-transform duration-300 ease-in-out transform group-hover:translate-x-[-10px] group-hover:bg-transparent group-hover:text-green-500 group-hover:border-green-500"
      >
        Get Started
      </a>
      <div className="absolute w-12 h-12 right-0 top-0 z-[-1] transition-transform duration-300 ease-in-out transform rotate-45 group-hover:translate-x-[40px] border-4 border-transparent group-hover:border-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 268.832 268.832"
          className="absolute w-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 fill-green-500 transition-all duration-300 ease-in-out"
        >
          <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
        </svg>
      </div>
    </div>
  );
};

export default HoverButton;
