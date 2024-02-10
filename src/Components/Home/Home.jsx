// Home.js

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../Contact/Contact";
import AboutC from "../AboutC/AboutC";
import Shift from "../Shift/Shift";
import Services from "../Services/Services";

import "./Home.css";
import image1 from "../Images/1.png";

import Intro from "../Intro/Intro";
// import image2 from '../Images/2.jpg';

const Home = () => (
  <div>
    <Header />
    <div
      id="Home"
      style={{
        // background: "linear-gradient(to top, #7F7FD5, #86A8E7, #91EAE4)", 
        // backgroundImage: `url(${require("../Images/texturebg.png")})`,
        // backgroundSize: "cover",
      }}
    >
      <Intro />
      <AboutC />
      <Services />
      <Shift />
      <ContactUs />
    </div>
    <Footer />
  </div>
);

export default Home;
