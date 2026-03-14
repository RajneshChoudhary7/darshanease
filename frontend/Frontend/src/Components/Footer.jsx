import React from "react";
import "./navbar.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <h2 className="footer-title">DarshanEase</h2>

        <p className="footer-desc">
          Embark on a Spiritual Journey, One Darshan at a Time – Seamless
          Temple Darshan Ticket Booking at Your Fingertips.
        </p>

        <button className="contact-btn">Contact Us</button>

        <p className="footer-phone">Call At: 127-865-586-67</p>

        <p className="footer-copy">
          © {new Date().getFullYear()} DarshanEase. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;