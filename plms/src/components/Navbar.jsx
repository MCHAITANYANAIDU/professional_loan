import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavigationBar = ({ onLoginClick }) => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">Professional Loan Management</Navbar.Brand>
      <Nav className="ms-auto">
        <Button variant="light" onClick={onLoginClick}>
          Login
        </Button>
      </Nav>
    </Container>
  </Navbar>
);

export default NavigationBar;
