import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageContext";
import LandingMenu from "./LandingMenu/LandingMenu";
import Home from "./Home/Home";
import About from "./AboutUS/About";
import Catalogue from "./Catalogue/Catalogue";
import Payment from "./Payment/Payment";
import Shipping from "./Shipping/Shipping"
import Contact from "./Contact/Contact";
const NavMenu = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LandingMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Catalogue" element={<Catalogue/>}/>
          <Route exact path="/Payment" element={<Payment/>}/>
          <Route exact path="/Shipping" element={<Shipping/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default NavMenu;
