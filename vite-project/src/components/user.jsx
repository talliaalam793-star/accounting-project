import React from 'react';
import father from '../assets/father.png'; // as you specified father.png
import cvFile from '../assets/Tariq-Ali-Ghunio-CV.pdf'; // renamed for safety
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './user.css';

const User = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <img src={father} alt="Tariq Ali Ghunio" className="about-image" />
          <div className="social-icons-image">
            <a href="https://www.facebook.com/TARIQALIGHUNIO" target="_blank" rel="noopener noreferrer" className="social-icon-img">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tariq_ali_ghunio/" target="_blank" rel="noopener noreferrer" className="social-icon-img">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/tariq-ali-ghunio-a8642a231/" target="_blank" rel="noopener noreferrer" className="social-icon-img">
              <FaLinkedinIn />
            </a>
            <a href="mailto:tariqalighunio@gmail.com" className="social-icon-img">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="about-right">
          <h2>I am Professional Accountant</h2>
          <p>
            Senior Accountant with over 15 years of experience in financial management, store operations, and public sector procurement.
            Specialized in QuickBooks, financial reporting, auditing, and compliance with Balochistan Public Procurement Rules.<br /><br />
            Currently serving as Senior Store Officer (BPS-18) in the Military Engineering Services, Ministry of Defence.
            Dedicated professional committed to accuracy, efficiency, and delivering high-quality accounting services.
          </p>
          <div className="about-buttons">
            <a href="#work" className="btn-primary">My Experience</a>
            <a href={cvFile} download="Tariq_Ali_Ghunio_CV.pdf" className="btn-secondary">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;