import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import bed from '../Images/bed.png';

const ScrollingBedContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 350px;
  width: 417px;
  height: 417px;
  z-index: 10;
  
`;

const ScrollingBed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOffsetY = 1100; // Adjust this value to set the point where scrolling stops

      if (scrollPosition <= maxOffsetY) {
        const offsetX = -scrollPosition * 0.1;
        const offsetY = scrollPosition * 1;

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
    <ScrollingBedContainer ref={containerRef}>
<img src={bed} alt="Bed" style={{ width: '100%', height: '100%' }} />    </ScrollingBedContainer>
  );
};

export default ScrollingBed;
