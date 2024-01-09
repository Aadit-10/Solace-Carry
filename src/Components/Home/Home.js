//Home.js

import React from 'react'
import Header from '../Header/Header'
import Footer from '..//Footer'
import './Home.css'
import image1 from '../Images/1.png';
import image2 from '../Images/2.jpg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div>
        <Header />
      <div id='Home'>
        {/* <h1>Dragon</h1> */}
        <div id='intro'>
          <div id='introtext' >
          <p className='mym'> Making your move </p>
          <p className='qae'>Quick and Easy</p> 
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
          
          </div>
        </div>

      </div>
      {/* <Footer /> */}
      
    </div>
  )
}

export default Home
