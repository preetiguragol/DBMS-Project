import React, { useState } from 'react';
import './SignupPage.css';
import { NavLink, useNavigate } from 'react-router-dom'; 

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className='label'>Sign Up</h2>
        <label className='label'>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className='label'>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='label'>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        <p className='ptag'>
        Already have an account?{' '}
          <NavLink to="/signin" className='navtag'>
              Sign in
          </NavLink>
      </p>
      </form>
       
    </div>
  );
};

export default SignupPage;
