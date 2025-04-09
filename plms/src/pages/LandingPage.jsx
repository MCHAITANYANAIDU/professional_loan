import React, { useState } from 'react';
import EligibilityCriteria from '../components/EligibilityCriteria';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // Default to login

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDE - Eligibility */}
      <div className="w-1/2 bg-white p-10 shadow-md">
        <EligibilityCriteria />
      </div>

      {/* RIGHT SIDE - Login/Register */}
      <div className="w-1/2 p-10 flex flex-col justify-center">
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('login')}
            className={`px-4 py-2 border ${activeTab === 'login' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-4 py-2 border ${activeTab === 'register' ? 'bg-green-600 text-white' : 'bg-white text-black'}`}
          >
            Register
          </button>
        </div>

        {/* CONDITIONAL RENDERING */}
        <div className="bg-white p-6 rounded shadow-md">
          {activeTab === 'login' && <LoginForm />}
          {activeTab === 'register' && <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
