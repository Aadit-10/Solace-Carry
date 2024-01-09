// Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/work-gallery">Work Gallery</a></li>
        {/* <li><a href="/branches">Branches</a></li> */}
        {/* <li><a href="/reviews">Reviews</a></li> */}
      </ul>
    </nav>
  </header>
);
};


export default Header;
