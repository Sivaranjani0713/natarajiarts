import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/classes.css";
import veenaclass from "../../Assets/RajiwithVeena.jpg";
import yogaclass from "../../Assets/TrianglePosee.jpg";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SpaIcon from "@mui/icons-material/Spa";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const classes = [
  {
    title: "Veena Classes",
    desc: "From beginner to advanced levels, master the divine instrument through structured learning of technique, theory, and classical compositions.",
    img: veenaclass,
    color: "orange",
    icon: <MusicNoteIcon sx={{ color: "#e37900", fontSize: 40 }} />,
    features: [
      {
        icon: <Diversity3Icon />,
        text: "All Levels",
      },
      {
        icon: <WatchLaterIcon />,
        text: "Flexible Hours",
      },
      {
        icon: <WorkspacePremiumIcon />,
        text: "Certified",
      },
    ],
  },
  {
    title: "Yoga & Wellness",
    desc: "60-minute sessions combining Ashtanga strength building with Vinyasa flow, plus pranayama for complete mind-body harmony.",
    img: yogaclass,
    color: "green",
    icon: <SpaIcon sx={{ color: "#4CAF50", fontSize: 40 }} />,
    features: [
      {
        icon: <FavoriteIcon />,
        text: "All Levels",
      },
      {
        icon: <HomeIcon />,
        text: "Flexible Hours",
      },
      {
        icon: <WorkspacePremiumIcon />,
        text: "Certified",
      },
    ],
  },
];

export default function ClassCards() {
  return (
    <div className="classes-section ms-3 ms-md-0 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="classes-title">Our Classes</h1>
        </div>
        <div className="row gx-6">
          {classes.map((item, index) => (
            <div className="col-lg-5-5 col-12 p-3" key={index}>
              <div className="class-card shadow">
                <div className="image-box">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="class-content-box">
                  <div className={`round-icon ${item.color}`}>{item.icon}</div>

                  <h2>{item.title}</h2>

                  <p className="small-para">{item.desc}</p>
                  <div className="col-lg-12 features gap-3 orange row-cols-1">
                    {item.features.map((feature, i) => (
                      <div
                        className={`align-items-center d-flex feature-item flex-column  ${item.color}-bg p-3 rounded-3`}
                        key={i}
                      >
                        {typeof feature === "string" ? (
                          feature
                        ) : (
                          <>
                            {feature.icon}
                            <span className="feature-text">{feature.text}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    className={`border-0 bg-white fs--1 py-1 ${item.color}-text`}
                  >
                    View Details <ArrowForwardIcon className="fw-semibolder" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
