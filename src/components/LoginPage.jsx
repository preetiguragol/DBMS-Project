import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css'; 
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login/', {
        username: username,
        password: password
      });

      if (response.data.success) {
        // Authentication successful
        navigate('/dashboard'); 
      } else {
        // Authentication failed
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className='title'>LOGIN</h2>
        <label className='label'>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className='label'>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
};

export default LoginPage;
