import React from 'react';
import './Header.css';
import Profile from '../Images/ProfileIcon.png';
import logo from '../Images/LOGO.png'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo"><a href="/"><img className="" src={logo} alt='Profile' /></a></li>
          <li><a href="/" style={{ fontFamily: 'SF Pro', fontWeight: 'bold' }}>Home</a></li>
          <li><a href="/services" style={{ fontFamily: 'SF Pro', fontWeight: 'bold' }}>Services</a></li>
          {/* <li><a href="/contact" style={{ fontFamily: 'SF Pro', fontWeight: 'bold' }}>Shifting Process</a></li> */}
          <li><a href="/" style={{ fontFamily: 'SF Pro', fontWeight: 'bold' }}>Booking</a></li>
          <li><a href="/work-gallery" style={{ fontFamily: 'SF Pro', fontWeight: 'bold' }}>Work Gallery</a></li>
          <li><a href="/"><img className="profile-icon" src={Profile} alt='Profile' /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;