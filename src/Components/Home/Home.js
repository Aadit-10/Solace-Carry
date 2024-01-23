//Home.js

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../Contact/Contact";
import AboutC from "../AboutC/AboutC";
import Shift from "../Shift/Shift";
import "./Home.css";
import image1 from "../Images/1.png";

import fullbox from "../Images/full box.png";
import boxout from "../Images/box out.png";

import ScrollingText from "../Scrolling/ScrollingText";
import ScrollingAlmarah from "../Scrolling/ScrollingAlmarah";
import ScrollingBag from "../Scrolling/ScrollingBag";
import ScrollingBed from "../Scrolling/ScrollingBed";
import ScrollingChair from "../Scrolling/ScrollingChair";
// import image2 from '../Images/2.jpg';

const Home = () => (
  <div>
    <Header />
    <div id="Home">
      {/* <h1>Dragon</h1> */}

      <div id="intro">
        {/* <div id="introtext">
          <ScrollingChair />
          <ScrollingBag />
          <ScrollingAlmarah />
          <ScrollingBed />
          <ScrollingText />
          <div className="box">
          <img src={boxout} alt="" className="boxout " />
          <img src={fullbox} alt="" className="fullbox " />
        </div>
        </div> */}
      </div>
      {/* <div > */}
        <AboutC />
      {/* </div> */}
      <div id="services">
        <b>
          <p id="shead">Our Services</p>
        </b>
        {/* <div className='service-cards'>
          <div className='service-ccard'>
            <img src={image1} alt='Service 1' />
            <div className='service-details'>
              <h3>Local moving</h3>
              <p>Description of Service 1</p>
            </div>
          </div>
          <div className='service-ccard'>
            <img src={image1} alt='Service 1' />
            <div className='service-details'>
              <h3>Local moving</h3>
              <p>Description of Service 1</p>
            </div>
          </div>
          <div className='service-ccard'>
            <img src={image1} alt='Service 1' />
            <div className='service-details'>
              <h3>Local moving</h3>
              <p>Description of Service 1</p>
            </div>
          </div><div className='service-ccard'>
            <img src={image1} alt='Service 1' />
            <div className='service-details'>
              <h3>Local moving</h3>
              <p>Description of Service 1</p>
            </div>
          </div>
          
        </div> */}
      </div>
      <div id="shift">
        <Shift />
      </div>
      <div > 
        <ContactUs />
      </div>
      {/* <div id='location'>
          <div className='loc'>
            <h1>Location</h1>
          </div>
          <div className='loc-pic'> </div>
        </div> */}
    </div>
    <Footer />
  </div>
);

export default Home;
