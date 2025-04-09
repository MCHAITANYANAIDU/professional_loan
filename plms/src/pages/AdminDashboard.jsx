import React from 'react';
import LogoutButton from '../components/LogoutButton';
import '../assets/styles/AdminDashboard.css';

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div className="admin-dashboard container text-center">
      <div className="admin-box">
        <h2 className="text-primary">Welcome, Admin</h2>
        <p className="lead">Logged in as: <strong>{user?.email}</strong></p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default AdminDashboard;
