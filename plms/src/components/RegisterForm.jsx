import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roast } from '../utils/roast';
import '../assets/styles/RegisterForm.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
      alert("Email already exists");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'user', email }));
    roast('register', 'user');
    navigate('/user');
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <h4 className="text-success mb-4">New User Registration</h4>
      <input type="text" className="form-control mb-3" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button type="submit" className="btn btn-success w-100">Register</button>
    </form>
  );
};

export default RegisterForm;
