import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import { useAuth0 } from "@auth0/auth0-react";
import "./UserNav.css";
import { NavLink } from "react-router-dom";

const UserNav = (props) => {
  const { texts } = useContext(LanguageContext);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();

  return (
    <nav className={`UserNav-nav ${props.Toggle ? (isAuthenticated ? "isActive" : "isActiveLog") : ""}`}>
      <ul className="UserNav-ul">
        {isAuthenticated ? (
          <>
            <NavLink to={`/${user.nickname}/Profile`} className="UserNav-li">
              {texts.User.Nav.Profile}
            </NavLink>
            <NavLink to={`/${user.nickname}/Orders`} className="UserNav-li">
              {texts.User.Nav.Orders}
            </NavLink>
            <NavLink to={`/${user.nickname}/ShippingAdress`} className="UserNav-li">
              {texts.User.Nav.ShippingAdress}
            </NavLink>
            <NavLink to={`/${user.nickname}/PaymentMethods`} className="UserNav-li">
              {texts.User.Nav.paymentMethods}
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
