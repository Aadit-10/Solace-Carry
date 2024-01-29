import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import './Scrolling.css'

const ScrollingTextContainer = styled.div`
  position: fixed;
  top: 55%;
  right: -120%;
  white-space: nowrap;
  color: black;
  font-size: 250px;
  // font-family: 'Notable', sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    /* Adjust the positioning for smaller screens */
    right: -60%;
    font-size: 120px;
  }
`;


const ScrollingText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetX = -scrollPosition * 2.5;
      const offsetY = -scrollPosition * 0.5; // Adjust the multiplier for the desired vertical speed

      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollingTextContainer ref={containerRef}>
      <span>Making</span> Your Move
    </ScrollingTextContainer>
  );
};

export default ScrollingText;
