import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida dolor sit amet lacus accumsan, eu commodo mauris vestibulum.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={6} className="mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <address>
              <p>Phone: +1 123-456-7890</p>
              <p>Email: info@solace.com</p>
            </address>
          </Col>

         
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
