// ContactBanner.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import Header from "../Header/Header";
import FAQ from "../Contact/FAQ";
import Footer from "../footer/Footer";
import ContactForm from "../Contact/Contactform";
import ContactInfo from "../Contact/Contactinfo";

function ContactBanner() {
  return (
    <div>
      <Header />
      <div className="contact-banner d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="banner-title">Get in Touch</h1>
          <p className="banner-text">
            We'd love to hear from you! Reach out for classes, events, or any
            questions
          </p>
        </div>
      </div>
      <div className="row col-12 justify-content-center pt-4 align-items-center gap-5">
        <ContactForm />
        <ContactInfo />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default ContactBanner;
