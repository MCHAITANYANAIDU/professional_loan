import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

// import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';

// Example role-based routing and user authentication (simplified)
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., via localStorage or context)
  return localStorage.getItem('authToken');
};

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <MainContainer> */}
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Login Page */}
          <Route
            path="/login"
            element={isAuthenticated() ? <Navigate to="/user-dashboard" /> : <LoginPage />}
          />
          
          {/* Registration Page */}
          <Route path="/register" element={<RegistrationPage />} />

          {/* Protected Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth isAuthenticated={isAuthenticated}>
                <AdminDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <RequireAuth isAuthenticated={isAuthenticated}>
                <UserDashboard />
              </RequireAuth>
            }
          />
        </Routes>
      {/* </MainContainer> */}
     
    </Router>
  );
};



export default App;
