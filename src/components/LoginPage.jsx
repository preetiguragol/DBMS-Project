import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css'; 
import axios from 'axios';
import {auth} from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

 
  const handleLogin =  (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,username,password)
    .then((userCredential)=> {
      console.log(userCredential);
      navigate('/dashboard');
    }).catch((error)=>{
      console.log(error);
      alert('Invalid email or password. Please try again.');
    } );
  };
    


  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className='title'>LOGIN</h2>
        <label className='label'>
          Email-id:
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
