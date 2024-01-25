import React from "react";
import image1 from "../Images/company.png";
import "./AboutC.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const AboutC = () => {
  return (
    <Container>
      <Row >
        <Col xs={12} md={4}>
          <Row>
            <Image
              src={image1}
              rounded
              style={{ width: "90%", height: "500px",marginLeft: "17px"}}
            />
          </Row>
        </Col>
        <Col>
          <Row >
            <div className="ac">
              <p>About Solace</p>
            </div>
          </Row>
          <Row >
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>

    // <div id="aboutc" className="container">
    //   <div className="company-info">
    //     <div className="card1">
    //       <img src={image1} alt="Company" />
    //     </div>
    //     <div className="aboutcdes">
    //       <div className="ac">
    //         <p>About Solace</p>
    //       </div>
    //       <p className="description">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
    //         odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
    //         quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutC;
