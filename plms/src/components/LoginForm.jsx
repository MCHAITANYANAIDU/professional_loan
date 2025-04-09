import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roast } from '../utils/roast';
import '../assets/styles/LoginForm.css';

const LoginForm = () => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded Admin/User
    const admin = { email: 'admin@plms.com', password: 'admin123' };
    const defaultUser = { email: 'user@plms.com', password: 'user1234' };

    if (role === 'admin' && email === admin.email && password === admin.password) {
      localStorage.setItem('loggedInUser', JSON.stringify({ role, email }));
      roast('login', 'admin');
      navigate('/admin');
      return;
    }

    if (role === 'user') {
      // 1. Check hardcoded user
      if (email === defaultUser.email && password === defaultUser.password) {
        localStorage.setItem('loggedInUser', JSON.stringify({ role, email }));
        roast('login', 'user');
        navigate('/user');
        return;
      }

      // 2. Check sessionStorage users
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find(user => user.email === email && user.password === password);

      if (existingUser) {
        localStorage.setItem('loggedInUser', JSON.stringify({ role, email }));
        roast('login', 'user');
        navigate('/user');
        return;
      }
    }

    // Invalid case
    alert('Invalid credentials');
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h4 className="mb-4 text-primary">Login</h4>
      <div className="mb-3">
        <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100">Login</button>
    </form>
  );
};

export default LoginForm;
