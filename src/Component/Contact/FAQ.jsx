import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaQuestion } from "react-icons/fa";
import "../Contact/faq.css";

const FAQ = () => {
  const faqs = [
    {
      q: "Do I need prior experience to join?",
      a: "No! We offer classes for all levels, from complete beginners to advanced students. Our beginner courses start with the fundamentals.",
    },
    {
      q: "What do I need to bring to yoga classes?",
      a: "Just bring a yoga mat, comfortable clothing, and water. We provide all other equipment if needed.",
    },
    {
      q: "Are virtual classes available?",
      a: "Yes! We offer in-person, virtual, and hybrid options for both Veena and Yoga classes to accommodate all students.",
    },
    {
      q: "Do I need to own a Veena to start learning?",
      a: "We recommend starting with rentals or borrowing an instrument while you begin your journey. We can help guide you in purchasing one when you're ready.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="text-center">
          <h1 className="faq-heading">Frequently Asked Questions</h1>

          <div className="title-line"></div>

          <p className="faq-subtitle">Quick answers to common questions</p>
        </div>

        <div className="faq-wrapper mx-auto">
          {faqs.map((item, index) => (
            <div className="faq-card d-flex" key={index}>
              <div className="faq-icon">
                <FaQuestion size={10} />
              </div>

              <div>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
