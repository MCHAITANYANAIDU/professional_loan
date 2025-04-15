import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoanCalculator from '../components/LoanCalculator';
import Carousel from '../components/Carousel';
import '../assets/styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Professional Loan Management</h1>
        <div className="landing-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      </header>

      {/* Scrolling Quotes */}
      <div className="scrolling-banner">
        <p>💼 Empower Your Career with Instant Loans &nbsp; | &nbsp; 🎯 Low-Interest EMI Options for Professionals &nbsp; | &nbsp; 🕒 Get Approved in 48 Hours &nbsp; | &nbsp; 🚀 Fuel Your Ambitions with Flexible Loans</p>
      </div>

      <Carousel />

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose PLMS?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>👨‍⚕️ Self-employed Professionals</h3>
            <p>Special loan schemes for doctors, architects, CAs, and more.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Quick Loan Processing</h3>
            <p>Get approval within 48 hours with minimum documents.</p>
          </div>
          <div className="feature-card">
            <h3>🔄 Flexible Tenure</h3>
            <p>Choose loan tenure up to 7 years with low interest.</p>
          </div>
        </div>
      </section>

      <LoanCalculator />

      <section className="faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>📌 What documents are required?</h4>
          <p>Basic KYC, income proof, and professional license (if applicable).</p>
        </div>
        <div className="faq-item">
          <h4>📌 Can I repay early?</h4>
          <p>Yes, prepayment is allowed with minimal or no charges.</p>
        </div>
        <div className="faq-item">
          <h4>📌 Is collateral needed?</h4>
          <p>No, most of our professional loans are unsecured.</p>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <p>&copy; 2025 Professional Loan Management System</p>
          <p>Contact: support@plms.in | +91 9876543210</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
