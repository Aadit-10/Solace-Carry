import React, { useEffect, useRef } from "react";
import "animate.css";
import gsap from "gsap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import truck from "../Images/TRUCK.png";
import "./Intro.css";
import Image1 from "../Images/2.jpg";

const Intro = () => {
  const animatedElementRef = useRef(null);
  // Empty dependency array to run the effect only once
  useEffect(() => {
    const truckImage = animatedElementRef.current;

    gsap.from(truckImage, {
      x: 100, // Adjust this value to control the final position
      duration: 1, // Adjust animation duration as needed
      // Add other GSAP properties as desired (e.g., rotation, easing, etc.)
    });
  }, []);
  return (
    <div id="intro" style={{ position: "relative" }}>
      <Container>
        {/* xs (mobile) view */}
        <Col xs={12} className="d-block d-sm-none ">
          <div className="marching-font">
            <p className="solace">Solace Carry </p>
            <p className="packers-movers">Packers and Movers</p>
            <p className="making">MOVING DREAMS DELIVERING TRUST</p>
            {/* <p className="making"> MOVE QUICK AND EASY</p> */}
          </div>
        </Col>

        {/* sm and larger screens */}
        <Col xs={12} md={6} className="intro-text d-none d-sm-block ">
          {" "}
          {/**/}
          <div className="marching-font ">
            <p className="solace">Solace Carry </p>
            <p className="packers-movers">Packers and Movers</p>
            <p className="making">MOVING DREAMS DELIVERING TRUST</p>
          </div>
        </Col>
        {/* <Col className="d-none d-sm-block">
          <img
            ref={animatedElementRef}
            src={truck} // Set the path to your image
            alt="Animated Image"
            className="animate__animated animate__fadeInRight"
          />
        </Col> */}
      </Container>
    </div>
  );
};

export default Intro;
