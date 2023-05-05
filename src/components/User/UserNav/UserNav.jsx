import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import "./UserNav.css";

const UserNav = (props) => {
  const { texts } = useContext(LanguageContext);
  return (
      <nav className={`UserNav-nav ${props.Toggle ? "isActive" : ""}`}>
        <ul className="UserNav-ul">
          <li className="UserNav-li">{texts.User.Nav.SingIn}</li>
        </ul>
      </nav>
  );
};

export default UserNav;
