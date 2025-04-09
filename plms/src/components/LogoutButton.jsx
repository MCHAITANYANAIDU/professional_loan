import React from 'react';
import { useNavigate } from 'react-router-dom';
import { roast } from '../utils/roast';
import '../assets/styles/LogoutButton.css';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    roast('logout');
    navigate('/');
  };

  return (
    <button className="btn btn-danger logout-btn" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
