import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import chair from '../Images/chair.png'

const ScrollingChairContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 1150px;
  width: 417px;
  height: 417px;
  z-index: 10; 

`;

const ScrollingChair = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOffsetY = 1100;

      if (scrollPosition <= maxOffsetY) {
      const offsetX = scrollPosition * 0.5;
      const offsetY = scrollPosition * 1; // Adjust the multiplier for the desired vertical speed

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
    <ScrollingChairContainer ref={containerRef}>
        <img src={chair} style={{ width: '90%', height: '90%' }} />
    </ScrollingChairContainer>
  );
};

export default ScrollingChair;