// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import HoverButton from "./HoverButton";

const Navbar = () => {
  return (
    <div
      className="absolute top-0 left-0 z-30 w-full flex items-center h-[10vh]"
      style={{
        background:
          "linear-gradient(to right, #E1E2E4, #E1E2E4, #E1E2E4, #D3D3D5 50%, #DDDDDF, #DCDCDE, #DCDCDE, #D6D6D8)",
      }}
    >
      {/* Left Side: Logo */}
      <div className="ml-[5vw]">
        <img src={logo} alt="Logo" className="w-[10vw]" />
      </div>

      {/* Middle Section: Links */}
      <div className="ml-auto mr-auto flex gap-[2vw]">
        {["Home", "The Problem", "Our Solution", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Right Side: Button */}
      <div className="mr-[5vw]">
        <Link to="/demo">
          <HoverButton />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
