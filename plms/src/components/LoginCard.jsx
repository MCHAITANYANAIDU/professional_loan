import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8732/api/users/login', formData);
      const user = res.data;

      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (error) {
      alert('Login failed. Check credentials!');
      console.error(error);
    }
  };

  return (
    <div className="card p-4 shadow w-50 mx-auto mt-4">
      <h5 className="mb-3 text-center text-primary">Login to Your Account</h5>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-3" type="email" placeholder="Email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input className="form-control mb-3" type="password" placeholder="Password" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginCard;
