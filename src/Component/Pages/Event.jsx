import React from "react";
import Header from "../Header/Header";
import "../Pages/event.css";
import Upcomingevent from "../Event/Upcomingevent";
import Pastevent from "../Event/Pastevent";
import Footer from "../footer/Footer";

const Event = () => {
  return (
    <div>
      <Header />
      <div className="event-banner-main d-flex align-items-center justify-content-center text-center">
        <div className="event-content-main">
          <h1 className="event-banner-main-title">Events & Workshops</h1>
          <p className="event-banner-main-text text-align-center">
            Join us for enriching musical performances, workshops, and wellness
            programs
          </p>
        </div>
      </div>
      <Upcomingevent />
      <Pastevent />
      <Footer />
    </div>
  );
};

export default Event;
