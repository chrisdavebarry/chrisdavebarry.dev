import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Home.css';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <div className="text-center">
            <h1>
              cbarry@localhost:~<span className="blinking-cursor"></span>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
