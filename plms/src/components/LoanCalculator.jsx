// src/components/LoanCalculator.jsx
import React, { useState } from 'react';
import '../assets/styles/LoanCalculator.css';


const LoanCalculator = () => {
  // State variables to store the inputs and result
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState('');

  // Function to calculate the monthly payment
  const calculateLoan = () => {
    // Reset error message
    setError('');

    // Convert inputs to numbers
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;  // Convert annual interest rate to monthly
    const term = parseInt(loanTerm);

    // Validate inputs
    if (isNaN(principal) || isNaN(interest) || isNaN(term) || principal <= 0 || interest <= 0 || term <= 0) {
      setError('Please provide valid inputs for all fields.');
      setMonthlyPayment(null);
      return;
    }

    // Loan payment calculation formula
    const x = Math.pow(1 + interest, term);
    const monthly = (principal * interest * x) / (x - 1);

    // Display monthly payment result
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div className="loan-calculator">
      <h2>Loan Calculator</h2>

      {/* Error message display */}
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>

      <div className="form-group">
        <label htmlFor="interestRate">Interest Rate (% per year):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter annual interest rate"
        />
      </div>

      <div className="form-group">
        <label htmlFor="loanTerm">Loan Term (months):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="Enter loan term in months"
        />
      </div>

      <button onClick={calculateLoan}>Calculate Payment</button>

      {/* Display the result */}
      {monthlyPayment !== null && (
        <div className="result">
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
