import React, { useContext } from "react";
import "./Error404.css";
import LanguageContext from "../../context/LanguageContext";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <body className="Error-body">
      <div className="Error-MainTitle">Error404</div>
      <div className="Error-title">{texts.Error404.pageNotfound}</div>
      <div className="Error-title">{texts.Error404.pageNotAvailable}</div>
      <div className="Error-Container">
        <div className="Error-titleB">{texts.Error404.pageReason}</div>
        <div className="Error-subtitle">-{texts.Error404.pageRemove}</div>
        <div className="Error-subtitle">-{texts.Error404.pageServer}</div>
        <div className="Error-subtitle">-{texts.Error404.pageTypo}</div>
      </div>
      <NavLink to="/Home" className="Error-return">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="Error-svg"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
        </svg>
        {texts.Error404.pageReturn}
      </NavLink>
    </body>
  );
};

export default Error404;
