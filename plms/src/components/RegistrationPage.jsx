// src/components/RegistrationPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', role: 'user' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8732/api/users/register', user);
      alert("Registered successfully 🎉");
    } catch (err) {
      alert("Registration failed 😞");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <select onChange={(e) => setUser({ ...user, role: e.target.value })}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
