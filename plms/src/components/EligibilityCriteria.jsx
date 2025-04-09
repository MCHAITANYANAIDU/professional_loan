import React from 'react';
import '../assets/styles/EligibilityCriteria.css';

const EligibilityCriteria = () => {
  return (
    <div className="eligibility-box">
      <h3 className="text-center mb-3">Eligibility Criteria</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Minimum 2 years of professional experience</li>
        <li className="list-group-item">Monthly income above ₹30,000</li>
        <li className="list-group-item">Must be an Indian citizen</li>
        <li className="list-group-item">Good credit history</li>
      </ul>
    </div>
  );
};

export default EligibilityCriteria;
