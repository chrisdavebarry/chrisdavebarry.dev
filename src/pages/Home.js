// Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Home.css';

export default function Home() {
  return (
    <Container className="text-center-vh">
      <Row className="custom-row">
        <Col xs={12} md={8}>
          <h1>cbarry@localhost:~<span className="blinking-cursor"></span></h1>
        </Col>
        <div className="logo-container">
          <a href="https://github.com/chrisdavebarry/">
            <img src="/img/github.png" alt="Github" className="logo"/>
          </a>
          <a href="https://www.linkedin.com/in/chrisdavebarry/">
            <img src="/img/linkedin.png" alt="LinkedIn" className="logo"/>
          </a>
        </div>
      </Row>
    </Container>
  );
}
