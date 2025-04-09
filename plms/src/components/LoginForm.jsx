import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const adminCreds = { email: 'admin@plms.com', password: 'admin123' };
    const userCreds = { email: 'user@plms.com', password: 'user1234' };

    if (role === 'admin') {
      if (email === adminCreds.email && password === adminCreds.password) {
        navigate('/admin');
      } else {
        setError('Invalid admin credentials');
      }
    } else if (role === 'user') {
      // First, check hardcoded user
      if (email === userCreds.email && password === userCreds.password) {
        navigate('/user');
        return;
      }

      // Then check registered users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find(user => user.email === email && user.password === password);

      if (validUser) {
        navigate('/user');
      } else {
        setError('Invalid user credentials');
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 mb-4 w-full">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-4 w-full"
        required
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">Login</button>

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
};

export default LoginForm;
