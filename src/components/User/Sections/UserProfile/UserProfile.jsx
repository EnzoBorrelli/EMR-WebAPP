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
        <div className="Profile-ImgDiv">
          <img src={user.picture} alt={user.name} className="Profile-UserImg" />
          <button className="Profile-imgUpload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="Profile-SVGupload"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
            </svg>
            <h1 className="Profile-UploadText">subir imagen</h1>
          </button>
        </div>
        <div className="Profile-ID">
          <h2 className="Profile-Name">{user.name}</h2>
          <h3 className={`Profile-status ${user.isSocial ? "isActive" : ""}`}>{user.isSocial ? "online" : "offline"}</h3>
        </div>
      </div>
      </div>
    </body>
  );
};

export default UserProfile;
