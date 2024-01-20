import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* Company Section */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Company</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida dolor sit amet lacus accumsan, eu commodo mauris vestibulum.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <address>
              <p>Phone: +1 123-456-7890</p>
              <p>Email: info@example.com</p>
            </address>
          </Col>

          {/* Locations Section */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Locations</h5>
            <ul className="list-unstyled">
              <li>New York</li>
              <li>Los Angeles</li>
              <li>London</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
