import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import styles from './Navigation.module.scss';
import { setTheme } from '../../utils/theme';

interface NavigationProps {
  navLinks: Array<{
    label: string;
    href: string;
  }>;
  languageFlag?: string;
  onLanguageToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  navLinks, 
  languageFlag, 
  onLanguageToggle 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("theme-dark")
  );
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY.get() > 50);
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tech', 'projects', 'extensions', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("theme-dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
    setIsDark(!isDark);
  };

  return (
    <motion.nav 
      className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}
      style={{ y, opacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code2 className={styles.logoIcon} />
          <span className={styles.logoText}>Jérôme</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Language Toggle */}
          {languageFlag && onLanguageToggle && (
            <motion.button
              className={styles.languageButton}
              onClick={onLanguageToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {languageFlag}
            </motion.button>
          )}

          {/* Theme Toggle */}
          <motion.button
            className={styles.themeButton}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? (
              <Sun className={styles.themeIcon} />
            ) : (
              <Moon className={styles.themeIcon} />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={styles.mobileNav}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.mobileNavContent}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;