import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div
      className="absolute top-0 left-0 z-30 h-[10vh] w-[100vw] flex"
      style={{
        background:
          "linear-gradient(to right, #E1E2E4 , #E1E2E4, #E1E2E4, #D3D3D5 50% , #DDDDDF , #DCDCDE , #DCDCDE ,#D6D6D8 )",
      }}
    >
      <div className="leftnav mt-[1.5vw] ml-[5vw]">
        <img src={logo} alt="Logo" className="w-[10vw]" />
      </div>

      <div className="rightnav mt-[1.75vw] ml-[22vw] flex gap-[2vw]">
        {["Home", "The Problem", "Our Solution", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              href=""
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              {item}
            </a>
          )
        )}
      </div>

      <Link to="/demo">
        <button className="w-[8vw] h-[5vh] mt-[1.5vw] ml-[22vw] bg-[#000080] rounded-[20px] text-white">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
