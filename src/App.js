import React from "react";
import "./App.css";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Classes from "./Component/Pages/Classes";
import Gallerypage from "./Component/Pages/Gallerypage";
import Event from "./Component/Pages/Event";
import ContactBanner from "./Component/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<ContactBanner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
