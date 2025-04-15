import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQs = () => (
  <section className="my-5">
    <h3 className="text-center mb-4">Frequently Asked Questions</h3>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the eligibility criteria for a professional loan?</Accordion.Header>
        <Accordion.Body>
          Eligibility criteria include a minimum of 2 years of professional experience and a stable income source.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What documents are required?</Accordion.Header>
        <Accordion.Body>
          Required documents typically include identity proof, address proof, income proof, and professional qualification certificates.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How long does the loan approval process take?</Accordion.Header>
        <Accordion.Body>
          The loan approval process usually takes up to 48 hours after submission of all required documents.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </section>
);

export default FAQs;
