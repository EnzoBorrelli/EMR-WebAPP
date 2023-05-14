import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import { useAuth0 } from "@auth0/auth0-react";
import "./UserProfile.css";

const UserProfile = () => {
  const { texts } = useContext(LanguageContext);
  const { user } = useAuth0();

  return (
    <body className="Profile">
      <div className="Profile-Card">
        <div className="Profile-Header">
          <h2 className="Profile-Name">{user.nickname}</h2>
        </div>
        <div className="Profile-div">
          <h3 className="Profile-section">Email</h3>
          <h3 className="Profile-content">{user.email}</h3>
        </div>
        <div className="Profile-div">
          <h3 className="Profile-section">WIP</h3>
          <h3 className="Profile-content">WIP</h3>
        </div>
      </div>
    </body>
  );
};

export default UserProfile;
