import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Highlights = () => (
  <section className="my-5">
    <h3 className="text-center mb-4">Why Choose PLMS?</h3>
    <Row>
      <Col md={4}>
        <Card className="p-3 shadow-sm h-100">
          <Card.Body>
            <Card.Title>Self-employed Professionals</Card.Title>
            <Card.Text>
              Special loan schemes for doctors, architects, CAs, and more.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-3 shadow-sm h-100">
          <Card.Body>
            <Card.Title>Quick Loan Processing</Card.Title>
            <Card.Text>
              Get approval within 48 hours with minimum documents.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-3 shadow-sm h-100">
          <Card.Body>
            <Card.Title>Flexible Tenure</Card.Title>
            <Card.Text>
              Choose loan tenure up to 7 years with low interest.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </section>
);

export default Highlights;
