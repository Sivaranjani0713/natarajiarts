import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Classes/learning.css";

const options = [
  {
    icon: "bi-building",
    title: "In-Person",
    desc: "Traditional face-to-face learning in San Jose, California with personalized attention",
    points: ["Direct guidance", "Hands-on corrections", "Community atmosphere"],
    highlight: false,
  },
  {
    icon: "bi-laptop",
    title: "Virtual",
    desc: "Learn from anywhere in the world with live online sessions via video call",
    points: ["Learn from home", "Flexible scheduling", "Worldwide access"],
    highlight: true,
  },
  {
    icon: "bi-infinity",
    title: "Hybrid",
    desc: "Combine in-person and virtual sessions for ultimate flexibility",
    points: ["Best of both worlds", "Adapt to schedule", "Maximum convenience"],
    highlight: false,
  },
];

const LearningOptions = () => {
  return (
    <section className="learning-section">
      <div className="container-fluid px-3 px-md-5">
        <div className="text-center mb-5">
          <h1 className="main-title">Flexible Learning Options</h1>
          <div className="title-line"></div>
          <p className="subtitle">Choose the format that works best for you</p>
        </div>

        <div className="row g-4 justify-content-between">
          {options.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className={`learning-card ${item.highlight ? "active-card" : ""}`}
              >
                <i className={`bi ${item.icon} card-icon`}></i>

                <h3>{item.title}</h3>
                <p className="desc">{item.desc}</p>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>
                      <i className="bi bi-check-lg"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
