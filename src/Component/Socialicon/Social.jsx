import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "../Socialicon/social.css";
import { useState } from "react";

const SocialSidebar = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const socialIcon = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
  ];
  return (
    <div className="social-sidebar">
      {socialIcon.map((item, index) => (
        <div
          key={index}
          className={`social-box ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {activeIndex === index && <span>{item.name}</span>}

          <div className="icon">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialSidebar;
