import React from "react";
import logo from "../../Assets/rajiroshanlogo.png";
import "../Header/header.css";
import { Link, Links } from "react-router-dom";
import about from "../Pages/About";
import contact from "../Pages/Contact";
import event from "../Pages/Event";
import gallery from "../Pages/Gallerypage";
import classes from "../Pages/Classes";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white custom-shadow d-flex justify-content-between align-items-center">
        <div className="ms-0 ms-md-4 d-flex align-items-center gap-2">
          <img className="logo-image" src={logo} alt="logo" />

          <div className="logo-title">
            <h1 className="title fw-semibold fs-3 m-0">Sattvalaya Arts</h1>

            <p className="m-0 small fw-semibold text-secondary">
              Harmony of Sound and Soul
            </p>
          </div>
        </div>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}

        <div
          className="collapse me-5 navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav gap-lg-4 text-center">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-black fw-medium fs--2 active"
                href=""
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link text-black fw-medium fs--2"
                href=""
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/classes"
                className="nav-link text-black fw-medium fs--2"
                href=""
              >
                Classes
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-link text-black fw-medium fs--2"
                href=""
              >
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/event"
                className="nav-link text-black fw-medium fs--2"
                href=""
              >
                Event
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link text-black fw-medium fs--2"
                href=""
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
