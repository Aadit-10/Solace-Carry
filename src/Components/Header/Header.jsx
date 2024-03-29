import React from 'react';
import './Header.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Profile from '../Images/ProfileIcon.png';
import logo from '../Images/LOGO.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
             */}
          </Nav>
          <Nav>
            <Nav.Link href="#" className="nav-link-laptop">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-link-laptop">Services</Nav.Link>
            <Nav.Link href="#book" className="nav-link-laptop">Booking</Nav.Link>
            <Nav.Link href="#deets" className="nav-link-laptop">Work Gallery</Nav.Link>
            {/* <Nav.Link href="#deets"><img src={Profile} alt="" /></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;