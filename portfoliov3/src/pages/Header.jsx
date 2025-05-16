import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-area">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://github.com/orgs/SpectralsOrganization/" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jerome-neupert/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
