import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact/contactform.css";

function ContactForm() {
  return (
    <div className="contact-page col-lg-5">
      <div className="contact-card">
        <h1>Send Us a Message</h1>
        <form>
          <label>Full Name *</label>
          <input type="text" className="form-control" placeholder="Your name" />

          <label>Email Address *</label>
          <input
            type="email"
            className="form-control"
            placeholder="your.email@example.com"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
          />

          <label>Interested In</label>
          <select className="form-select">
            <option>Select an option</option>
            <option>Admissions</option>
            <option>Courses</option>
            <option>Support</option>
            <option>Other</option>
          </select>

          <label>Message *</label>
          <textarea
            className="form-control message-box"
            placeholder="Tell us about your interests and any questions you have..."
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
