import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Services.css";

import Image1 from "../Images/House Shifting.png";
import Image2 from "../Images/Industrial Shifting.png";
import Image3 from "../Images/Vehicle Shifting.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Services = () => {
  return (
    <div id="services" className="mt-3">
      <Container>
        <Col>
          <Row>
            <Col>
              {/*in col just above className=" services-text d-flex align-items-center " */}
              <h1>Services we provide</h1>
            </Col>
            <Col xs={12} md={3}>
              <Image
                className="image-card"
                src={Image1}
                alt="Your Alt Text"
                fluid
                rounded
              />
              <p className="service-name">House Shifting</p>
              <p className="px-3 service-text">
                Experience stress-free relocation with our comprehensive house
                shifting services, handling every aspect to make your move
                comfortable and worry-free.
              </p>
            </Col>
            <Col xs={12} md={3}>
              <Image
                className="image-card"
                src={Image3}
                alt="Your Alt Text"
                fluid
                rounded
              />
              <p className="service-name"> Vehicle Shifting</p>
              <p className="px-3 service-text">
                Safely transport your vehicles with our reliable services,
                ensuring a smooth relocation for your cars, bikes, and more.
              </p>
            </Col>
            <Col xs={12} md={3}>
              <Image
                className="image-card"
                src={Image2}
                alt="Your Alt Text"
                fluid
                rounded
              />
              <p className="service-name">Industrial/Office Shifting</p>
              <p className="px-3 service-text">
                Effortless business moves – our services guarantee a seamless
                transition for your office or industrial space, minimizing
                downtime and maximizing efficiency.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Services;
