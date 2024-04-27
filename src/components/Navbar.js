import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  const linkStyle = {
    fontWeight: 'bold',
    color: '#fff',
    transition: 'color 0.3s ease',
  };

  const handleHover = (e) => {
    e.target.style.color = '#792aac';
    const img = e.target.parentElement.querySelector('img');
    if (img) {
      img.style.filter = 'brightness(0) invert(1)';
    }
  };

  const handleLeave = (e) => {
    e.target.style.color = '#fff';
    const img = e.target.parentElement.querySelector('img');
    if (img) {
      img.style.filter = 'brightness(100%) invert(0)';
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand href="/" style={{ fontWeight: 'bold', ...linkStyle }} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <img
            src={process.env.PUBLIC_URL + '/img/logo.png'}
            alt="yes"
            height="30"
            className="d-inline-block align-top"
            style={{ transition: 'filter 0.3s ease' }}
          />
          Chris Barry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center"> {}
            <Nav.Link href="/" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              Home
            </Nav.Link>
            <Nav.Link href="about" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              About
            </Nav.Link>
            <Nav.Link href="blog" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              Blog
            </Nav.Link>
            <Nav.Link href="projects" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
