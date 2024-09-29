// src/components/MainPage.jsx
import React from "react";
import Page from "./Page.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";
import Contact from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import Pricing from "./Pricing.jsx";
import CustomCursor from "./CustomCursor";

const MainPage = () => {
  return (
    <>
      <CustomCursor />
      <Page />
      <Page3 />
      <Page2 />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
