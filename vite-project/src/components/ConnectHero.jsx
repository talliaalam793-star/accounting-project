// src/components/ConnectHero.jsx
import React from 'react';
import './ConnectHero.css';

const ConnectHero = () => {
  return (
    <section className="connect-hero">
      <div className="connect-container">
        <p className="section-subtitle">— Let's Connect —</p>
        <h2>Have a Project in Mind?</h2>
        <h3>Let's Build Something Amazing!</h3>
        <a href="#contact-form" className="work-together-btn">
          Let's Work Together →
        </a>
      </div>
    </section>
  );
};

export default ConnectHero;