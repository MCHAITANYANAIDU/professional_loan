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

      <div className="scrolling-banner">
        <p>💼 Empower Your Career | 🎯 Low-Interest EMI | 🕒 Get Approved Fast | 🚀 Fuel Ambitions</p>
      </div>

      <Carousel />

      <section className="why-choose">
        <h2>Why Choose PLMS?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>👨‍⚕️ Self-employed Professionals</h3>
            <p>Special loans for doctors, architects, CAs, and more.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Quick Processing</h3>
            <p>Approval in 48 hours with minimal paperwork.</p>
          </div>
          <div className="feature-card">
            <h3>🔄 Flexible Tenure</h3>
            <p>Tenure up to 7 years with competitive rates.</p>
          </div>
        </div>
      </section>

      <LoanCalculator />

      <section className="faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>📌 Required Documents?</h4>
          <p>KYC, income proof, and license (if applicable).</p>
        </div>
        <div className="faq-item">
          <h4>📌 Early Repayment?</h4>
          <p>Yes, with minimal or no fees.</p>
        </div>
        <div className="faq-item">
          <h4>📌 Need Collateral?</h4>
          <p>No, most loans are unsecured.</p>
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
