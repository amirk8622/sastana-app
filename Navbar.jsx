// NavBar.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar"> {/* Apply custom CSS class */}
      <Container fluid>
        <Navbar.Brand href="#" className="sastana">
          <img
            src="https://c8.alamy.com/comp/2RCTM7A/irl-logo-irl-letter-irl-letter-logo-design-initials-irl-logo-linked-with-circle-and-uppercase-monogram-logo-irl-typography-for-technology-busines-2RCTM7A.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          Sastana
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
