import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../About/values.css";

const values = [
  {
    icon: "bi bi-heart-fill",
    title: "Passion",
    desc: "We believe in nurturing a genuine love and passion for the arts, creating joy in every learning experience.",
  },
  {
    icon: "bi bi-book-fill",
    title: "Tradition",
    desc: "We honor and preserve the rich heritage of Indian classical music while making it accessible to modern learners.",
  },
  {
    icon: "bi bi-hand-thumbs-up-fill",
    title: "Community",
    desc: "We foster a supportive, inclusive environment where students grow together as artists and individuals.",
  },
];

function CoreValues() {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="core-title">
            Our Core Values
            <span></span>
          </h2>
          <p className="core-subtitle">
            The principles that guide everything we do
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {values.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="value-card text-center h-100">
                <i className={`${item.icon} value-icon`}></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
