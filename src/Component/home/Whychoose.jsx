import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMusic, FaLeaf, FaChalkboardTeacher } from "react-icons/fa";
import "../home/whychoose.css";

function WhyChoose() {
  const cards = [
    {
      icon: <FaMusic />,
      title: "A Foundation in Classical Veena",
      text: "Learn from Rajalakshmi Roshan, trained under renowned Guru Shri V. S. Rangarajan, with strong foundation in technique and theory.",
      bg: "card-peach",
    },
    {
      icon: <FaLeaf />,
      title: "Holistic Mind-Body Practice",
      text: "Certified Ashtanga & Vinyasa yoga classes combining strength, flexibility, and mindfulness for complete well-being.",
      bg: "card-green",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Flexible Learning for Modern Lifestyles",
      text: "In-person classes in San Jose, CA with virtual and hybrid options available for students worldwide.",
      bg: "card-blue",
    },
  ];

  return (
    <section className="why-section py-5">
      <div className="container text-center">
        <h2 className="section-title text-black">The Sattvalaya Approach</h2>
        <p className="section-subtitle">
          Discover the perfect blend of tradition, expertise, and holistic
          learning
        </p>

        <div className="row g-5 mt-5">
          {cards.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={`why-card ${item.bg}`}>
                <div className="icon-circle">{item.icon}</div>

                <h3 className="text-title lh-base">{item.title}</h3>
                <p className="p-1 m-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
