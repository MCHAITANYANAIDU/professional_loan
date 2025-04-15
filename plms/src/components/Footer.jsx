import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <Container>
      <Row className="text-center">
        <Col md={6}>
          <p className="mb-0">© 2025 PLMS. All rights reserved.</p>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-center gap-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
