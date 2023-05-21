import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageContext";
import { CurrencyProvider } from "../context/CurrencyContext";
import LandingMenu from "./LandingMenu/LandingMenu";
import Home from "./Sections/Home/Home";
import About from "./Sections/AboutUS/About";
import Catalogue from "./Sections/Catalogue/Catalogue";
import Payment from "./Sections/Payment/Payment";
import Shipping from "./Sections/Shipping/Shipping";
import Contact from "./Sections/Contact/Contact";
import UserProfile from "./User/Sections/UserProfile/UserProfile";
import PageFooter from "./PageFooter/PageFooter";
import PaymentMethods from "./User/Sections/PaymentMethods/PaymentMethods";

const NavMenu = () => {

  return (
    <LanguageProvider>
      <CurrencyProvider>
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
            <Route exact path="/:user/Profile" element={< UserProfile />} />
            <Route exact path="/:user/PaymentMethods" element={< PaymentMethods />} />
          </Routes>
          <PageFooter></PageFooter>
        </BrowserRouter>
      </CurrencyProvider>
    </LanguageProvider>
  );
};

export default NavMenu;
