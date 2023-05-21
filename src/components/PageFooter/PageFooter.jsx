import React from "react";
import "./PageFooter.css";
import paypal from "./Paypal.png";
import mercadoPago from "./mercadoPago.png";

const PageFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="FooterPage">
      <div className="Footer-div">
        <h1 className="Footer-h1">© 2023 EM-Robots</h1>
        <div className="Footer-imgPaypal">
          <img src={paypal} alt="" className="FooterImg" />
        </div>
        <div className="Footer-imgMer">
          <img src={mercadoPago} alt="" className="FooterImg" />
        </div>
        <button onClick={scrollToTop} className="scroll-to-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="Footer-svg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default PageFooter;
