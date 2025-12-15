// Privacy.jsx
import React from "react";
import "../Styles/Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        
        <p className="intro-text">
          This privacy policy explains how we collect, use, and protect your personal information when you use our website.
        </p>

        <div className="policy-section">
          <h2>What Information We Collect</h2>
          <p>
            We collect name, email, phone number, and address when you register, fill forms, or make purchases.
          </p>
        </div>

        <div className="policy-section">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Personalize your experience</li>
            <li>Process transactions</li>
            <li>Customer service</li>
            <li>Send updates and newsletters</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Data Protection</h2>
          <p>
            We don't store credit cards, use malware scanning, or ask for sensitive information. 
            No SSL certificate as we only provide information.
          </p>
        </div>

        <div className="policy-section highlight">
          <h2>Third-Party Disclosure</h2>
          <p><strong>We do NOT sell, trade, or share your personal information.</strong></p>
        </div>

        <div className="policy-section">
          <h2>Cookies</h2>
          <p>We do not use cookies for tracking. Manage preferences in your browser settings.</p>
        </div>

        <div className="policy-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Website:</strong> <a href="https://www.web.almodeat.in">www.web.almodeat.in</a></p>
            <p><strong>Email:</strong> <a href="mailto:sreesoftwares5@gmail.com">sreesoftwares5@gmail.com</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/919500941142">+91 95009 41142</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
