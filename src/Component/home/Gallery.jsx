import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/Gallery.css";
import card1 from "../../Assets/Natarajasana.jpg";
import card2 from "../../Assets/meditation.jpg";
import card3 from "../../Assets/Veenastrumming.jpg";
import card4 from "../../Assets/RajiwithVeena.jpg";
import card5 from "../../Assets/VeenaclassatNataRajiArts.jpg";
import card6 from "../../Assets/musicbook.jpg";
import card7 from "../../Assets/yogaclass.jpg";

const images = [card1, card2, card3, card4, card5, card6, card7];

function Gallery() {
  return (
    <div className="gallery-section ms-4 ms-md-0 px-5 py-5">
      <div className="max-w-90">
        <h2 className="section-title text-center text-black">
          Moments of Beauty
        </h2>
        <p className="section-subtitle text-center">
          Capturing the essence of divine arts and peaceful practice
        </p>
        <div className="row gx-3 gy-4 py-5">
          <div className="col-lg-3 col-md-6">
            <div className="gallery-card">
              <img src={images[0]} className="gallery-img" alt="Yoga" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="gallery-card">
              <img src={images[1]} className="gallery-img" alt="Meditation" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="gallery-card">
              <img src={images[2]} className="gallery-img" alt="Veena" />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="gallery-card">
              <img src={images[3]} className="gallery-img" alt="Veena Player" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="gallery-card">
              <img
                src={images[4]}
                className="gallery-img large-img"
                alt="Teaching Veena"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="gallery-card">
              <img
                src={images[5]}
                className="gallery-img large-img"
                alt="Music Notes"
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="gallery-card">
              <img
                src={images[6]}
                className="gallery-img large-img"
                alt="Yoga Mountain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
