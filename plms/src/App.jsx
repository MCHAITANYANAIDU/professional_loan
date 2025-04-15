import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import RequireAuth from './components/RequireAuth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* Protected Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <RequireAuth>
              <UserDashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
