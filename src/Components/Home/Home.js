//Home.js

import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactUs from '../Email/Contact';
import './Home.css'
import image1 from '../Images/1.png';

import fullbox from '../Images/full box.png'
import boxout from '../Images/box out.png'



import ScrollingText from '../Scrolling/ScrollingText';
import ScrollingAlmarah from '../Scrolling/ScrollingAlmarah'
import ScrollingBag from '../Scrolling/ScrollingBag'
import ScrollingBed from '../Scrolling/ScrollingBed'
import ScrollingChair from '../Scrolling/ScrollingChair'

// import image2 from '../Images/2.jpg';


const Home = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  
  return (
    <div>
        <Header />
      <div id='Home'>
        {/* <h1>Dragon</h1> */}
        
        
        <div id='intro'>
            <div id='introtext' className='curve'>
              {/* <ScrollingBag /> */}
              <ScrollingChair/>
              <ScrollingBag /> 
              <ScrollingAlmarah /> 
              <ScrollingBed />

              <ScrollingText />
              <div className='box'>
                <img src={boxout} alt="" className='boxout '/>
                <img src={fullbox} alt="" className='fullbox '/>
              </div>
            </div>
           </div>
        <div id='scos'>
              <div className='text'>
                <p className='cmy'>The Company</p>
                <p className='cmy'>makes it easy</p>
              </div>
            </div>
        <div id='services'>
          <b><p id='shead'>Our Services</p></b>
          <div className='service-cards'>
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
            
          </div>
        </div >
        <div id='shift'>
          <h1>Shifting process</h1>
          <div className='shift-items'>
          <div className ='shift-item'>
          <div className='ccard'>
                <img src={image1} alt='Service 1'  className='ccard-img'/>
                <div className='ccard-details'>
                  <h3>Service 1</h3>
                  <p>Description of Service 1</p>
                </div>
              </div>
          </div>
          <div className='shift-item'>
          <div className='ccard'>
                <img src={image1} alt='Service 1' className='ccard-img' />
                <div className='ccard-details' >
                  <h3>Service 1</h3>
                  <p>Description of Service 1</p>
                </div>
              </div>
          </div>
          <div className='shift-item'>
          <div className='ccard'>
                <img src={image1} alt='Service 1' className='ccard-img' />
                <div className='ccard-details'>
                  <h3>Service 1</h3>
                  <p>Description of Service 1</p>
                </div>
              </div>
          </div>
          <div className='shift-item'>
          <div className='`ccard`'>
                <img src={image1} alt='Service 1' className='ccard-img' />
                <div className='ccard-details'>
                  <h3>Service 1</h3>
                  <p>Description of Service 1</p>
                </div>
              </div>
          </div>
          </div>
          
        </div>
        <div id='book'>
          <div className='book-text'>
            <p> Book your Slot </p>

          </div>
          <div className='books-labels'>
          <ContactUs />
          </div>
        </div>
        <div id='location'>
          <div className='loc'>
            <h1>Location</h1>
          </div>
          <div className='loc-pic'> </div>
        </div>

      </div>
      <Footer /> 
      
    </div>
  )
}


export default Home