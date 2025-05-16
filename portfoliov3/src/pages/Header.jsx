import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu  = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container">
        {/* Desktop logo */}
        <div className="logo-area">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Nav drawer / desktop bar */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {/* Mobile logo in drawer */}
          <div className="logo-mobile">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>

          <ul className="nav-list" onClick={closeMenu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="social-icons">
            <a
              href="https://github.com/orgs/SpectralsOrganization/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jerome-neupert/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </nav>

        {/* Hamburger icon (mobile only) */}
        <button
          aria-label="Toggle navigation menu"
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
