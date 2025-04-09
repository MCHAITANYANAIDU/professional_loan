import React, { useState } from 'react';
import EligibilityCriteria from '../components/EligibilityCriteria';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import '../assets/styles/LandingPage.css';

const LandingPage = () => {
  const [tab, setTab] = useState('login');

  return (
    <div className="container-fluid landing-wrapper">
      <div className="row vh-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <EligibilityCriteria />
        </div>

        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white">
          <div className="mb-4">
            <button onClick={() => setTab('login')} className={`btn ${tab === 'login' ? 'btn-primary' : 'btn-outline-primary'} me-2`}>
              Login
            </button>
            <button onClick={() => setTab('register')} className={`btn ${tab === 'register' ? 'btn-success' : 'btn-outline-success'}`}>
              Register
            </button>
          </div>

          <div className="w-75">
            {tab === 'login' ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
