import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import { useAuth0 } from "@auth0/auth0-react";
import "./UserNav.css";
import { NavLink } from "react-router-dom";

const UserNav = (props) => {
  const { texts } = useContext(LanguageContext);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {isAuthenticated} = useAuth0();

  return (
    <nav className={`UserNav-nav ${props.Toggle ? "isActive" : ""}`}>
      <ul className="UserNav-ul">
        {isAuthenticated ? (
          <>
            <NavLink to="/Profile/" className="UserNav-li">
            {texts.User.Nav.Profile}
            </NavLink>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="UserNav-li"
            >
              {texts.User.Nav.SingOut}
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()} className="UserNav-li">
            {texts.User.Nav.SingIn}
          </button>
        )}
      </ul>
    </nav>
  );
};

export default UserNav;
