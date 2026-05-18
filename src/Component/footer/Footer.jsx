import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "../footer/footer.css";
import rajilogo from "../../Assets/rajiroshanlogo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <footer className="footer-section mx-4 mx-md-0">
      <div className="container">
        <div className="row gy-5">
          {/* Left Side */}
          <div className="col-lg-3 col-md-6">
            <div className="scalloped-shape d-flex align-items-center mb-4">
              <img src={rajilogo} alt="logo" className="footer-logo" />

              <h3 className="brand-name ms-3">Sattvalaya Arts</h3>
            </div>

            <p className="footer-text">
              Nurturing the divine arts of Veena and holistic wellness since
              2022
            </p>

            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links d-flex flex-column gap-2-5">
              <li>
                <KeyboardArrowRightIcon className="arrow-icon" /> About Us
              </li>
              <li>
                <KeyboardArrowRightIcon className="arrow-icon" /> Classes
              </li>
              <li>
                <KeyboardArrowRightIcon className="arrow-icon" /> Gallery
              </li>
              <li>
                <KeyboardArrowRightIcon className="arrow-icon" /> Events
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Contact Info</h4>

            <ul className="contact-info d-flex flex-column gap-3">
              <li className="d-flex align-items-center gap-3">
                <FaMapMarkerAlt className="icon-li" />
                San Jose, California
              </li>

              <li className="d-flex align-items-center gap-3">
                <FaEnvelope className="icon-li" />
                info@natarajiarts.com
              </li>

              <li className="d-flex align-items-center gap-3">
                <FaPhoneAlt className="icon-li" />
                +1(213)304-4799
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Newsletter</h4>

            <p className="footer-text">Subscribe for updates and events</p>

            <div className="newsletter-box">
              <input type="email" placeholder="Your email" />

              <button className="mail-btn">
                <FaPaperPlane className="email-icon" />
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className="copyright text-center">
          © 2025 Copyright Techvoice Solutions. All Rights Reserved.
          <span>
            {" "}
            Crafted with <FavoriteIcon className="heart-icon" /> for preserving
            divine traditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
