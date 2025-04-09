import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import '../assets/styles/UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    if (!user || user.role !== 'user') {
      navigate('/');
    }
  }, []);

  return (
    <div className="user-dashboard container text-center">
      <div className="user-box">
        <h2 className="text-success">Welcome, User</h2>
        <p className="lead">Logged in as: <strong>{user?.email}</strong></p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserDashboard;
