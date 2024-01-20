// ScrollingBag.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import bag from '../Images/bag.png';

const ScrollingBagContainer = styled.div`
  position: absolute;
  top: -100px;
  left: 300px;
  z-index: 10;
  width: 100px;
  height: 200px;

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    top: -50px;
    left: 50px;
  }
`;

const ScrollingBag = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOffsetY = 1190; // Adjust this value to set the point where scrolling stops

      if (scrollPosition <= maxOffsetY) {
      const offsetX = scrollPosition * 0.2;
      const offsetY = scrollPosition * 1.1; // Adjust the multiplier for the desired vertical speed

      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollingBagContainer ref={containerRef}>
        <img src={bag} style={{ width: '360%', height: '230%' }} />
    </ScrollingBagContainer>
  );
};

export default ScrollingBag;