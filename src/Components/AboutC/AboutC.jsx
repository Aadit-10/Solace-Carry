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
      <Row>
        {/* xs (mobile) view */}
        <Col xs={12} className="d-block d-sm-none">
          <Row>
            <Col xs={12}>
              <div className="ac">
                <p>About Solace</p>
              </div>
            </Col>
            <Col xs={12}>
              <Image
                src={image1}
                rounded
                style={{
                  width: "90%",
                  height: "500px",
                  marginLeft: "10px",
                }}
              />
            </Col>
            <Col xs={12}>
              <p
                className="description px-3"
                style={{
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum.
              </p>
            </Col>
          </Row>
        </Col>

        {/* sm and larger screens */}
        <Col xs={12} md={6} className="d-none d-sm-block">
          <Image
            src={image1}
            rounded
            style={{ width: "400px", height: "85%" }}
          />
        </Col>
        <Col xs={12} md={6} className="d-none d-sm-block">
          <div className="ac">
            <p>About Solace</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutC;
