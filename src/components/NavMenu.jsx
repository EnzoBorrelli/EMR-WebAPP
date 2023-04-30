import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageContext";
import LandingMenu from "./LandingMenu/LandingMenu";
import Home from "./Home/Home";
import About from "./AboutUS/About";
const NavMenu = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LandingMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default NavMenu;
