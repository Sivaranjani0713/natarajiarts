import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Course from "../Classes/Course";
import Learning from "../Classes/Learning";
import "../Pages/event.css";

const Classes = () => {
  return (
    <div>
      <Header />
      <div className="event-banner-main d-flex align-items-center justify-content-center text-center">
        <div className="event-content-main">
          <h1 className="event-banner-main-title">Our Classes</h1>
          <p className="event-banner-main-text text-align-center">
            Explore our comprehensive programs in Veena and Yoga
          </p>
        </div>
      </div>
      <Course />
      <Learning />
      <Footer />
    </div>
  );
};

export default Classes;
