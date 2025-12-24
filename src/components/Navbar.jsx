import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" className="logo-svg" fill="none">
              <path 
                d="M12 2L2 7L12 12L22 7L12 2Z" 
                fill="white"
              />
              <path 
                d="M2 17L12 22L22 17" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M2 12L12 17L22 12" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="logo-text">
            <h1>THIS-LINKS</h1>
            <p>CONSTRUCTION COMPANY</p>
          </div>
        </div>

        {/* Menu with DIVIDERS */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#about">About</a>
            <span className="menu-divider">|</span>
          </li>
          <li>
            <a href="#mission">Our Mission</a>
            <span className="menu-divider">|</span>
          </li>
          <li>
            <a href="#what-we-do">What We Do</a>
            <span className="menu-divider">|</span>
          </li>
          <li>
            <a href="#contact">Contact</a>
            <span className="menu-divider">|</span>
          </li>
        </ul>

        <button className="login-btn" onClick={handleLoginClick}>
          <span>Login</span>
          <div className="user-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/>
              <path d="M4 20c0-4 3-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </button>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;