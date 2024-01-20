import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import almarah from '../Images/almarah.png'

const ScrollingAlmarahContainer = styled.div`
  position: absolute;
  top: -35px;
  right: -80px;
  z-index: 10; 
`;

const ScrollingAlmarah = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOffsetY = 1150; // Adjust this value to set the point where scrolling stops

      if (scrollPosition <= maxOffsetY) {
      const offsetX = -scrollPosition * 0.5;
      const offsetY = scrollPosition * 1.05; // Adjust the multiplier for the desired vertical speed

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
    <ScrollingAlmarahContainer ref={containerRef}>
        <img src={almarah} style={{ width: '90%', height: '90%' }} />
    </ScrollingAlmarahContainer>
  );
};

export default ScrollingAlmarah;