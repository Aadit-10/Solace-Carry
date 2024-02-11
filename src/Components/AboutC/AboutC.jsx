import React from "react";
import image1 from "../Images/company.png";
import "./AboutC.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AboutC = () => {
  return (
    <Container className="aboutc">
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
                className="about-image"
                // style={{
                //    marginLeft: "10px",
                // }}
              />
            </Col>
            <Col xs={12}>
              <p
                className="description px-5"
                style={{
                  // marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                Solace Carry is your trusted relocation partner, ensuring smooth
                moves for homes, offices, and vehicle shifting in Calicut
              </p>
            </Col>
          </Row>
        </Col>

        {/* sm and larger screens */}
        <Col xs={12} md={6} className=" py-5 d-none d-sm-block">
          <Image
            src={image1}
            rounded
            className="about-image"
            style={{ width: "350px", height: "85%" }}
          />
        </Col>
        <Col xs={12} md={6} className="py-5 d-none d-sm-block">
          <div className="ac">
          <p>About Solace</p>
          </div>
          <p className="description">
            Solace Carry is your trusted relocation partner, ensuring smooth
            moves for homes, offices, and vehicle shifting in Calicut.With a
            commitment to excellence, we specialize in seamlessly managing the
            entire moving process, ensuring a stress-free and efficient
            experience for our clients
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutC;
