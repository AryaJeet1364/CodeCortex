import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
      <div className="w-[100vw] h-[60vh] bg-gray-300 flex flex-col">
        <div className="topfooter flex ml-[4vw]">
          <div className="topleft">
            <img src={logo} alt="" className="w-[15vw] ml-[1.5vw] mt-[3vw]" />
            <p className="text-[1.2vw] ml-[3vw] mb-[1.5vw]">
              Subscribe to our newsletter for the latest updates on new features
              and <br /> product releases
            </p>
            <div className="input ml-[3vw] mb-[0.7vw]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-[20vw] p-[0.5vw] mr-[1vw] rounded-[40px] bg-transparent border-[1px] border-[#658352] border-solid text-center placeholder:text-black"
              />
              <button className="p-[0.5vw] w-[10vw]  bg-transparent text-[#658352] hover:bg-[#94a687] hover:text-white border-[1px] border-[#658352] border-solid  rounded-[40px] font-semibold">
                Subscribe
              </button>
            </div>
            <p className="ml-[3vw] text-[0.8vw]">
              Stay updated with our latest news and products by subscribing to
              our news letter
            </p>
          </div>
          <div className="ml-[8vw] mt-[4vw]">
            <h1 className="text-[1.5vw] font-bold mb-[1vw]">Company</h1>
            <ul className="flex flex-col gap-[0.7vw]">
              <a>About Us</a>
              <a>Contact Us</a>
              <a>FAQs</a>
              <a>Blogs</a>
              <a>Support</a>
            </ul>
          </div>
          <div className="ml-[6vw] mt-[4vw]">
            <h1 className="text-[1.5vw] font-bold mb-[1vw]">Resources</h1>
            <ul className="flex flex-col gap-[0.7vw]">
              <a>Terms of Services</a>
              <a>Privacy Policy</a>
              <a>Cookie Policy</a>
              <a>Careers</a>
              <a>Sitemap</a>
            </ul>
          </div>
          <div className="ml-[6vw] mt-[4vw]">
            <h1 className="text-[1.5vw] font-bold mb-[1vw]">Follow Us</h1>
            <ul className="flex flex-col gap-[0.7vw]">
              <a>Facebook</a>
              <a>Instagram</a>
              <a>X</a>
              <a>Linkedin</a>
              <a>Youtube</a>
            </ul>
          </div>
        </div>
        <div className="bottomfooter">
          <p className="mt-[5vw] ml-[6.6vw]">
            &copy;2024 NFC Website; All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer