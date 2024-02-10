import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* Company Section */}
          <Col md={6} className="mb-4">
            <h5 className="mb-3 h1 ">Solace Carry </h5>
            <h5 className="mb-3"> Packers and Movers</h5>

            <p>
              For inquiries and assistance, feel free to reach out to us
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={6} className="mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <address>
              <p>Phone: +91 7012980583</p>
              <p>Email: info@solace.com</p>
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
