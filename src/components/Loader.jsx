// src/components/Loader.jsx
import React from 'react';
import '../css/Loader.css'; // Import your CSS for styling

const Loader = () => {
  return (
    <div className="wlan-search">
      <div>
        <svg className="top" viewBox="0 0 40 40">
          <path d="M4,14 C9.33333333,10 14.6666667,8 20,8 C25.3333333,8 30.6666667,10 36,14"></path>
        </svg>
        <svg className="middle" viewBox="0 0 40 40">
          <path d="M9,19 C12.6666667,16.3333333 16.3333333,15 20,15 C23.6666667,15 27.3333333,16.3333333 31,19"></path>
        </svg>
        <svg className="bottom" viewBox="0 0 40 40">
          <path d="M13,24 C15.3333333,22.1666667 17.6666667,21.25 20,21.25 C22.3333333,21.25 24.6666667,22.1666667 27,24"></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
