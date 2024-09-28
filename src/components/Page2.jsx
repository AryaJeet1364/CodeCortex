import React from "react";
import { motion } from "framer-motion";
import Install from "../assets/hero.png";
import Monitor from "../assets/cart.png";
import Alerts from "../assets/qr.png";
import Guitar from "./Guitar.jsx";

const featuresData = [
  {
    title: "NFC Implementation",
    description:
      "Tap your phone to the NFC tags attached on the products, leading to addition of that item in the cart",
    icon: "fas fa-lightbulb",
    bgImage: Install,
  },
  {
    title: "Access Virtual Cart",
    description: "The scanned products are automatically added to the cart",
    icon: "fas fa-video",
    bgImage: Monitor,
  },
  {
    title: "Seamless Checkout",
    description:
      "After succesfull payment, scan the generated QR code at the gates",
    icon: "fas fa-mobile-alt",
    bgImage: Alerts,
  },
];

const Page2 = () => {
  return (
    <>
    <motion.section
      id="features"
      className="h-[100vh] w-[100vw] py-20 bg-gradient-to-r from-gray1 via-gray4 to-gray6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-[3vw] font-extrabold mb-[5vw] ml-[6vw]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Solution
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 ml-[6vw] mr-[3vw]">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-box relative bg-white p-6 shadow-md rounded-lg text-center overflow-hidden h-[50vh]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center blur-[1.5px] z-0"
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + 0.2 * index }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + 0.2 * index }}
                >
                  <i className={`text-5xl text-indigo-600 ${feature.icon}`}></i>
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mt-[1.5vw] text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + 0.2 * index }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="mt-[13vw] text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + 0.2 * index }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    <Guitar />
    </>
  );
};

export default Page2;
