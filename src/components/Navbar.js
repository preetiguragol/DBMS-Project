import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
    <nav className="navbar">NETWISE 
    <ul className="nav-links">
      <li>
        <Link to="/dashboard" className="nav-link">Home</Link>
        
      </li>
      <li>
        <Link to="/prepaid" className="nav-link">Prepaid</Link>
      </li>
      <li>
        <Link to="/postpaid" className="nav-link">Postpaid</Link>
      </li>
      <li>
        <Link to="/DTH" className="nav-link">DTH</Link>
      </li>
      <li>
        <Link to="/change-address" className="nav-link">Customer Care</Link>
      </li>
      
     
    </ul>
  </nav>
  </div>
  );
};

export default Navbar;