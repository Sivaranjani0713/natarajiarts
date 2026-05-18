import React from "react";
import heroimg from "../../Assets/Raji.jpg";
const Hero = () => {
  return (
    <div className="container-fluid hero-section mx-4 mx-md-0">
      <div className="row align-items-center">
        <div className="col-lg-6 p-5 text-white">
          <div className="hero-content">
            <h1 className="fw-bold hero-heading">Meet Rajalakshmi Roshan</h1>

            <p className="mt-4 hero-para">
              A biotechnologist by profession and a Vainika, Bharatanatyam
              dancer, and
              <br /> yoga practitioner by passion. With training beginning at
              age 11, she brings
              <br /> decades of dedication to sharing the divine art of Veena
              and wellness practices.
            </p>

            <button className="border-0 fw-semibold custom-btn px-lg-2 py-3 py-lg-3 rounded-pill text-bg-dark">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
