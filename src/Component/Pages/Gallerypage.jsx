import React from "react";
import Header from "../Header/Header";
import "../Pages/Gallerypage.css";
import Gallerysection from "../Gallery/Gallerysection";
import Footer from "../footer/Footer";

const Gallerypage = () => {
  return (
    <div>
      <Header />
      <div className="event-banner-main d-flex align-items-center justify-content-center text-center">
        <div className="event-content-main">
          <h1 className="event-banner-main-title">Gallery</h1>
          <p className="event-banner-main-text text-align-center">
            Capturing moments of divine music, graceful movements, and peaceful
            practice
          </p>
        </div>
      </div>
      <Gallerysection />
      <Footer />
    </div>
  );
};

export default Gallerypage;
