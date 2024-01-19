import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ScrollingTextContainer = styled.div`
  position: fixed;
  top: 55%;
  right: -120%; /* Fix: Add 'px' to the value */
  white-space: nowrap;
  color: #fff;
  font-size: 250px;
  font-family: 'Notable', sans-serif;
  overflow: hidden;
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
