import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageContext";
import LandingMenu from "./LandingMenu/LandingMenu";
import Home from "./Sections/Home/Home";
import About from "./Sections/AboutUS/About";
import Catalogue from "./Sections/Catalogue/Catalogue";
import Payment from "./Sections/Payment/Payment";
import Shipping from "./Sections/Shipping/Shipping";
import Contact from "./Sections/Contact/Contact";
const NavMenu = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LandingMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Catalogue" element={<Catalogue />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/Shipping" element={<Shipping />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default NavMenu;
