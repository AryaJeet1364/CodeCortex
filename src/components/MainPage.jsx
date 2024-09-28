import React from "react";
import Page from "./Page.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";
import Contact from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import Pricing from "./Pricing.jsx";


const MainPage = () => {
  return (
    <>
      <Page />
      <Page3 />
      <Page2 />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default MainPage
