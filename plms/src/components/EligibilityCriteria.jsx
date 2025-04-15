import React from 'react';
import { Card } from 'react-bootstrap';

const EligibilityCriteria = () => (
  <section className="my-5">
    <h3 className="text-center mb-4">Eligibility Criteria</h3>
    <Card className="p-4 shadow-sm">
      <ul>
        <li>Minimum 2 years of professional experience.</li>
        <li>Stable income source with proof.</li>
        <li>Good credit history.</li>
        <li>Valid professional qualification certificates.</li>
      </ul>
    </Card>
  </section>
);

export default EligibilityCriteria;
