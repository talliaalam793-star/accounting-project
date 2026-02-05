// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      'service_54ukyhe',
      'template_9gw5a7f',
      formData,
      '5S1vj8tX-LcYTgOfO'
    )
    .then(() => {
      setStatus('Message sent successfully! I\'ll reply soon 👋');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, (error) => {
      setStatus('Failed to send. Please try again.');
      console.log(error);
    });
  };

  return (
    <section className="contact-section" id="contact-form">
      <div className="contact-container">
        <p className="section-subtitle">— Get In Touch —</p>

        <div className="contact-grid">
          <div className="contact-info-side">
            <h2>Let's discuss your Project</h2>
            <p className="info-desc">Feel free to reach out through any of these channels.</p>

            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>MOQ NO. 01 URAK ROAD NEAR IQRA GATE QUETTA CANTT BALOCHISTAN PAKISTAN</p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:tariqalighunio@gmail.com">tariqalighunio@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/tariq-ali-ghunio-a8642a231/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-0.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.065-.926-2.065-2.065 0-1.138.92-2.065 2.065-2.065 1.139 0 2.065.927 2.065 2.065 0 1.139-.926 2.065-2.065 2.065zm1.777 13.019H3.559V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>

              <a href="mailto:tariqalighunio@gmail.com">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-side">
            <h2>Let's connect</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              </div>

              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />

              <textarea name="message" placeholder="Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" className="send-message-btn">
                Send Message →
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;