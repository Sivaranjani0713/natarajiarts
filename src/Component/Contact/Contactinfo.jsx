import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "../Contact/contactinfo.css";

function ContactInfo() {
  return (
    <section className="contact-info-section col-lg-5">
      <h1>Contact Information</h1>

      <div className="contact-info-list">
        <div className="info-item">
          <div className="info-icon">
            <FaMapMarkerAlt className="icon-svg" />
          </div>
          <div>
            <h4>Location</h4>
            <p>San Jose, California</p>
            <span>In-person, Virtual & Hybrid Classes Available</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <FaEnvelope className="icon-svg" />
          </div>
          <div>
            <h4>Email</h4>
            <p className="orange-text">info@Natarajiarts.com</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <FaPhoneAlt className="icon-svg" />
          </div>
          <div>
            <h4>Phone</h4>
            <p className="orange-text">+1(213) 304-4799</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <FaClock className="icon-svg" />
          </div>
          <div>
            <h4>Class Hours</h4>
            <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
            <p>Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      <div className="connect-section">
        <div className="connect-card-info">
          <h2>Connect With Us</h2>

          <p>
            Follow us on social media for updates, inspiration, and community
            highlights
          </p>

          <div className="social-icons-info">
            <a href="/" className="icon-box-info">
              <FaFacebookF />
            </a>

            <a href="/" className="icon-box-info">
              <FaInstagram />
            </a>

            <a href="/" className="icon-box-info">
              <FaYoutube />
            </a>

            <a href="/" className="icon-box-info">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
