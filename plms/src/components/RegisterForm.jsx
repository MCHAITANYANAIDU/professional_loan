import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Save user to localStorage
    const newUser = { name, email, password };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    const alreadyExists = existingUsers.find(user => user.email === email);
    if (alreadyExists) {
      setError("User with this email already exists!");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redirect after successful registration
    navigate('/user');
  };

  return (
    <form onSubmit={handleRegister}>
      <h2 className="text-xl font-bold mb-4">New User Registration</h2>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="border p-2 mb-2 w-full" required />

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 w-full" required />

      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-2 w-full" required />

      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="border p-2 mb-4 w-full" required />

      <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full">Register</button>

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
};

export default RegisterForm;
