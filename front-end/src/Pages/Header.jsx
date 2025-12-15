import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header.css";
import logoImage from '../assets/Logo1.jpeg'; // Adjust the path as necessary
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
                  <img src={logoImage} alt="Logo" className="logo-image" />

        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/privacy-policy" className="nav-link">Privacy</Link></li>
            <li><Link to="/terms-and-conditions" className="nav-link">Terms</Link></li>
          </ul>
          
          <button className="menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
