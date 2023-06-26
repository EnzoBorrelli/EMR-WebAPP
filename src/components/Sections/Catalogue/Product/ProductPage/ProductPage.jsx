import React, { useContext, useState } from "react";
import "./ProductPage.css";
import CurrencyContext from "../../../../../context/CurrencyContext";
import LanguageContext from "../../../../../context/LanguageContext";

const ProductPage = ({
  Pagetoggle,
  pageProduct,
  ClosePage,
  ChangeImg,
  img,
  handleAddProduct,
}) => {
  const { getCurrency } = useContext(CurrencyContext);
  const { texts } = useContext(LanguageContext);

  //añadir secciones de descripcion en los lenguajes y luego con texts[var] pasarlo al asunto. xD

  return (
    <div className={`pageDiv ${Pagetoggle ? "isActive" : ""}`}>
      <div className="Page-Close">
        <button className="Page-CloseBtn" onClick={ClosePage}>
          X
        </button>
      </div>
      <div className="Page-head">
        <h1 className="Page-Name">{pageProduct.name}</h1>
      </div>
      <div className="Page-Body">
        <div className="Page-imgs">
          <div className="Page-imgSelect">
            <button
              onClick={() => ChangeImg(pageProduct.image)}
              className="Page-imgOption"
            >
              <img
                src={pageProduct.image}
                alt={pageProduct.name}
                className="Page-img"
              />
            </button>
            <button
              onClick={() => ChangeImg(pageProduct.image)}
              className="Page-imgOption"
            >
              <img
                src={pageProduct.image}
                alt={pageProduct.name}
                className="Page-img"
              />
            </button>
            <button
              onClick={() => ChangeImg(pageProduct.image)}
              className="Page-imgOption"
            >
              <img
                src={pageProduct.image}
                alt={pageProduct.name}
                className="Page-img"
              />
            </button>
          </div>
          <div className="Page-MainImg">
            <img src={img} alt={pageProduct.name} className="Page-img" />
          </div>
        </div>
        <div className="Page-Data">
          <div className="Page-section">
            {texts.PCBs.Description[pageProduct.textKey]}
          </div>
          <hr className="Page-line" />
          <div className="Page-section">
            {getCurrency(pageProduct.price)}{" "}
            <button
              className="Page-CartBtn"
              onClick={() => handleAddProduct(pageProduct)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="Product-svg"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>
              <h3 className="Page-CartBtn--text">+1</h3>
            </button>
          </div>
          <hr className="Page-line" />
          <div className="Page-section">categoria: {pageProduct.category}</div>
        </div>
      </div>
      <div className="Page-Foot">
        <div className="Page-FootSection">
          <h1 className="FootSection-title">descripcion</h1>
          <hr className="Page-line" />
          <div className="FootSection-text">
            {texts.PCBs.AnotherDescription[pageProduct.textKey]}
          </div>
        </div>
        <div className="Page-FootSection">
          <h1 className="FootSection-title">caracteristicas</h1>
          <hr className="Page-line" />
          <div className="FootSection-text">
            {texts.PCBs.OtherDescription[pageProduct.textKey]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
