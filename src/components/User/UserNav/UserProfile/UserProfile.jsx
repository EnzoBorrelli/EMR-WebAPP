import React,{ useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
/*import { useAuth0 } from "@auth0/auth0-react";*/
import "./UserProfile.css";

const UserProfile = () => {
  const { texts } = useContext(LanguageContext);
  /*const { user } = useAuth0();*/

  return (
    <body>
      <div className="UserProfile">WIP</div>
    </body>
  );
};

export default UserProfile;
