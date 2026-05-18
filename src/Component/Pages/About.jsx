import React from "react";
import Header from "../Header/Header";
import "../Pages/event.css";
import Footer from "../footer/Footer";
import Mission from "../About/Mission";
import Counter from "../About/Counter";
import Values from "../About/Values";


const About = () => {
  return (
    <div>
      <Header />
      <div className="event-banner-main d-flex align-items-center justify-content-center text-center">
        <div className="event-content-main">
          <h1 className="event-banner-main-title">About Sattvalaya Arts</h1>
          <p className="event-banner-main-text text-align-center">
            Nurturing the divine arts and fostering holistic wellness since 2022
          </p>
        </div>
      </div>
      <Mission />
      <Counter />
      <Values />
      <Footer />
    </div>
  );
};

export default About;
