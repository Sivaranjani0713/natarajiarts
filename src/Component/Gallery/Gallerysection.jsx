import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/Gallerypage.css";
import image1 from "../../Assets/RajiwithVeena.jpg";
import image2 from "../../Assets/Veenastrumming.jpg";
import image3 from "../../Assets/3rdcard.jpg";
import image4 from "../../Assets/meditation.jpg";
import image5 from "../../Assets/5thcard.jpg";
import image6 from "../../Assets/6thcard.jpg";
import image7 from "../../Assets/Natarajasana.jpg";
import image8 from "../../Assets/14thcard.jpg";
import image9 from "../../Assets/9thcard.jpg";
import image10 from "../../Assets/VeenaclassatNataRajiArts.jpg";
import image11 from "../../Assets/11thcard.jpg";
import image12 from "../../Assets/12thcard.jpg";
import image13 from "../../Assets/13thcard.jpg";
import image14 from "../../Assets/TrianglePosee.jpg";
import image15 from "../../Assets/15thcard.jpg";

const images = [
  {
    id: 1,
    category: "veena",
    src: image1,
    // name: "Veena Practice",
    // subtitle: "The divine instrument",
  },
  {
    id: 2,
    category: "veena",
    src: image2,
  },
  {
    id: 3,
    category: "veena",
    src: image3,
  },
  {
    id: 4,
    category: "yoga",
    src: image4,
  },
  {
    id: 5,
    category: "yoga",
    src: image5,
  },
  {
    id: 6,
    category: "yoga",
    src: image6,
  },
  {
    id: 7,
    category: "yoga",
    src: image7,
  },
  {
    id: 8,
    category: "yoga",
    src: image8,
  },
  {
    id: 9,
    category: "performances",
    src: image9,
  },
  {
    id: 10,
    category: "students",
    src: image10,
  },
  {
    id: 11,
    category: "students",
    src: image11,
  },
  {
    id: 12,
    category: "students",
    src: image12,
  },
  {
    id: 13,
    category: "performances",
    src: image13,
  },
  {
    id: 14,
    category: "yoga",
    src: image14,
  },
  {
    id: 15,
    category: "yoga",
    src: image15,
  },
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const buttons = ["all", "veena", "yoga", "performances", "students"];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="gallery-section">
      <div className="container">
        <div className="text-center mb-5">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`filter-btn ${filter === btn ? "active" : ""}`}
            >
              {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredImages.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
              <div className="image-card" onClick={() => handleShow(item.src)}>
                <img src={item.src} alt="" />
                <div className="gallery-overlay">
                  <div className="gallery-text">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}

        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Body className="text-center">
            <img src={selectedImage} className="popup-image" alt="" />

            <Button className="mt-4 close-btn" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Gallery;
