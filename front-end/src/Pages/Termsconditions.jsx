// TermsConditions.jsx
import React from "react";
import "../Styles/Termsconditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-title">Terms and Conditions</h1>
        
        <p className="terms-intro">
          Welcome to Sreesoftwares. These terms and conditions outline the rules and regulations 
          for the use of our Services. By accessing this website we assume you accept these 
          terms and conditions in full.
        </p>

        <div className="terms-section">
          <h2>Acceptance of Terms</h2>
          <p>
            'Client', 'You' and 'Your' refers to you, the person accessing this website and 
            accepting the Company's terms and conditions. 'The Company', 'Ourselves', 'We' 
            and 'Us' refers to Sreesoftwares. All terms refer to the offer, acceptance and 
            consideration of payment necessary to undertake our assistance to you.
          </p>
        </div>

        <div className="terms-section">
          <h2>Cookies</h2>
          <p>
            We employ the use of cookies. By using our services you consent to the use of 
            cookies in accordance with our privacy policy. Cookies enable us to retrieve 
            user details for each visit and improve functionality.
          </p>
        </div>

        <div className="terms-section">
          <h2>License</h2>
          <p>
            We own the intellectual property rights for all material on our website. 
            You may view and/or print pages for your own personal use subject to restrictions.
          </p>
          <ul>
            <li>You must not republish material</li>
            <li>You must not sell, rent or sub-license material</li>
            <li>You must not reproduce, duplicate or copy material</li>
            <li>You must not redistribute content</li>
          </ul>
        </div>

        <div className="terms-section highlight">
          <h2>Hyperlinking Policy</h2>
          <p>
            Government agencies, search engines, news organizations and accredited businesses 
            may link to our website without prior approval, provided links are not misleading 
            and do not imply endorsement.
          </p>
        </div>

        <div className="terms-section">
          <h2>iFrames</h2>
          <p>
            Without prior approval and express written permission, you may not create frames 
            around our web pages or use techniques that alter our site's visual presentation.
          </p>
        </div>

        <div className="terms-section">
          <h2>Reservation of Rights</h2>
          <p>
            We reserve the right to request removal of links to our website and to amend 
            these terms at any time. You agree to immediately remove links upon request.
          </p>
        </div>

        <div className="terms-section">
          <h2>Disclaimer</h2>
          <p>
            To the maximum extent permitted by law, we exclude all warranties relating to 
            our website. We will not be liable for any loss or damage of any nature.
          </p>
        </div>

        <div className="terms-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:sreesoftwares5@gmail.com">sreesoftwares5@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://www.web.almodeat.in">www.web.almodeat.in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
