import React from "react";
import Navbar from "./Navbar";
import img from "../assets/hero1.png"; // Import your image

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-[100vh] w-[100vw] flex overflow-hidden">
        <div
          className="absolute top-[7vh] left-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            filter: "blur(3.5px)",
            zIndex: 0,
          }}
        />
        <div className="leftside z-10">
          {" "}
          <h1 className="text-[5vw] text-[#000] font-extrabold uppercase mt-[22vh] ml-[6vw]">
            Revol<span className="text-white">ution</span>izing <br />
            <span className="ml-[1.5vw]">The C</span>
            <span className="text-white">hecko</span>ut
            <br />
            <span className="ml-[4.3vw]">Expe</span><span className="text-white">rienc</span>e
          </h1>
        </div>
        <div className="rightside z-10">
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Page;
