import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left side - Text */}
        <div className="hero-content">
          <h1>
            Hello, I'm <br />
            <span>Tariq Ali Ghunio</span>
          </h1>

          <p className="hero-subtitle">
            Senior Accountant with over 15 years of professional experience
          </p>

          <p className="hero-description">
            Dedicated and detail-oriented accounting professional specializing in financial management, 
            store operations, and public sector procurement. Experienced in government and private sector 
            accounting roles with a strong background in QuickBooks, financial reporting, and compliance 
            with Balochistan Public Procurement Rules. Father's Name: <strong>Mohammad Alam</strong>.
          </p>

          <div className="hero-buttons">
            <button onClick={openPopup} className="btn-primary">
              Get In Touch
            </button>

            <a 
              href="mailto:tariqalighunio@gmail.com" 
              className="btn-secondary"
            >
              tariqalighunio@gmail.com
            </a>
          </div>
        </div>

        {/* Right side - Circular Photo */}
        <div className="hero-image-wrapper">
          <div className="hero-image-circle">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800"
              alt="Tariq Ali Ghunio"
              className="profile-img"
            />
          </div>
        </div>
      </div>

      {/* Popup when clicking Get In Touch */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>

            <h2>Get In Touch</h2>
            <p>Message me at my email – I'll reply as soon as possible!</p>

            <a 
              href="mailto:tariqalighunio@gmail.com" 
              className="popup-email"
            >
              tariqalighunio@gmail.com
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;