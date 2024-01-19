//Home.js

import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css'
import image1 from '../Images/1.png';
import bag from '../Images/bag.png'
import almarah from '../Images/almarah.png'
import bed from '../Images/bed.png'
import chair from '../Images/chair.png'
import fullbox from '../Images/full box.png'
import boxout from '../Images/box out.png'



import ScrollingText from '../ScrollingText/ScrollingText';
// import {Parallax,ParallaxLayer} from '@react-spring/parallax'
// import { Parallax } from 'react-parallax';
// import image2 from '../Images/2.jpg';
 


const Home = () => {
  
  return (
    <div>
        <Header />
      <div id='Home'>
        {/* <h1>Dragon</h1> */}
        
        
        <div id='intro'>
            <div id='introtext'>
              <div className='bag'>
              <img src={bag} alt='BAG'  className='bag'/>
              </div>
              <div className='bag'>
              <img src={chair} alt='BAG'  className='chair'/>
              </div>
              <div className='bag'>
              <img src={almarah} alt='BAG'  className='almarah'/>
              </div>
              <div className='bag'>
              <img src={bed} alt='BAG'  className='bed'/>
              </div>
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
          {/* <form ref={form} onSubmit={sendEmail}>  */}
            <div className=''>
              <input type="text"placeholder='Moving from*' class="grid-item  required" />
              <input type="text"placeholder='Moving to*' class="grid-item " />
            </div>

            <div>
              <input type="text" placeholder='Full Name*'class="grid-item " />
              <input type="email" placeholder='Email*' class="grid-item " />
            </div>
            
            <div>
              <input type="date" placeholder='Moving-Date*' class="grid-item "/>
              <input type="number" placeholder='Phone Number*' class="grid-item " />
            </div>

            <div>
               <input type="text"placeholder='Description' class="grid-item des " id="description" colspan="2"/>
            </div>
            <div>
              <input type="button" class="grid-item es" value="Submit"/>
            </div>
          {/* </form> */}

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