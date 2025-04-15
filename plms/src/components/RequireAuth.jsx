// src/components/RequireAuth.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isAuthenticated = localStorage.getItem('plms_user');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RequireAuth;
