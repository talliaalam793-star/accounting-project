import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openContact = () => {
    setIsContactOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeContact = () => setIsContactOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-circle">T</span>
            <span className="logo-name">Tariq Ali</span>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-links desktop-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#services">Services</a>
            <button onClick={openContact} className="contact-btn">
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-close" onClick={toggleMobileMenu}>×</button>
            <a href="#home" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" onClick={toggleMobileMenu}>About</a>
            <a href="#process" onClick={toggleMobileMenu}>Process</a>
            <a href="#portfolio" onClick={toggleMobileMenu}>Portfolio</a>
            <a href="#blog" onClick={toggleMobileMenu}>Blog</a>
            <a href="#services" onClick={toggleMobileMenu}>Services</a>
            <button onClick={openContact} className="mobile-contact-btn">
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Contact Popup - FINAL PERFECT like your image */}
      {isContactOpen && (
        <div className="contact-overlay" onClick={closeContact}>
          <div className="contact-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeContact} className="contact-close">×</button>
            <div className="contact-content">
              <h2>Get In Touch 👋</h2>
              <div className="email-wrapper">
                <div className="email-icon">📧</div>
                <a href="mailto:tariqalighunio@gmail.com" className="contact-link">
                  tariqalighunio@gmail.com
                </a>
              </div>
              <p>Feel free to send me an email – I'll reply as soon as possible!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;