import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/Logo1.jpeg";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        {/* Email */}
        {/* <div className="footer-email">
          <MdEmail size={22} className="me-2" />
          <a
            href="mailto:hello@sreesoftware.in"
            className="footer-email-link"
          >
            hello@sreesoftware.in
          </a>
        </div> */}

        {/* Logo */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="SreeSoftware Logo"
            className="footer-logo"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          {/* <h3 className="footer-brand-name">SREESOFTWARE</h3> */}
        </div>

        {/* Social */}
        <div className="footer-social-row">
          <span className="footer-social-label">Follow us</span>
          <div className="footer-social-icons">
            <a  className="footer-social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/share/1JoiYbt7gr/"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/@sreesoftwares597?si=2kC9yghonHRAOoWm"
              className="footer-social-icon"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          {/* <Link to="/fair-usage-policy" className="footer-link">
            Fair Usage Policy
          </Link> */}
          <span className="footer-link-separator">•</span>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <span className="footer-link-separator">•</span>
          <Link to="/terms-and-conditions" className="footer-link">
            Terms & Conditions
          </Link>
        </div>

        {/* Description */}
        <p className="footer-text">
          SreeSoftware is a brand fully owned by Sree Softwares.
          Ltd. All third‑party logos used belong to their respective legal
          owners. Their usage doesn't indicate any association or claim.
          <br />
          Google Play and the Google Play logo are trademarks of Google LLC.
        </p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sree Softwares.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
