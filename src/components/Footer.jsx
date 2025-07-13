import React from "react";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import '../Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <h3>CrossFit Studio</h3>
        <p>Empowering women through movement, not machines.</p>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p><FaMapMarkerAlt /> 123 Fitness Street, Mumbai</p>
        <p><FaPhoneAlt /> +91 9876543210</p>
        <p><FaInstagram /> @crossfitstudio</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 CrossFit Studio. Built with strength 💪 | <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Made by Drashti</a></p>
    </div>
  </footer>
);

export default Footer;
