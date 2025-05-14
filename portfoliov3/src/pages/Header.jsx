import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-area">
          <img src="https://via.placeholder.com/120x40?text=Logo" alt="Logo" className="logo" />
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
