import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../About/mission.css";

function MissionVision() {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="text-center mission-heading">
          <h2>Our Mission &amp; Vision</h2>
          <p>
            Inspiring the next generation through divine arts and holistic
            wellness
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="bi bi-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To share the beauty of the divine Veena with audiences from
                diverse cultural backgrounds, and to nurture the next generation
                of Vainikas by fostering a supportive, creative, and joyful
                learning experience. We aim to cultivate balance and harmony of
                body, mind, and soul through comprehensive wellness programs.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="bi bi-eye-fill"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To create a thriving community where traditional Indian
                classical arts and holistic wellness practices are accessible to
                all. We envision a space where students not only master
                technique but also connect deeply with the spiritual and
                cultural essence of these ancient practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
