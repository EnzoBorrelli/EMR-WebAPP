import React, { useContext, useState } from "react";
import "./ProductPage.css";
import CurrencyContext from "../../../../../context/CurrencyContext";

const ProductPage = ({ Pagetoggle, pageProduct, ClosePage }) => {
  const { getCurrency } = useContext(CurrencyContext);
  const [img, setImg] = useState(pageProduct.image);

  function ChangeImg(image) {
    setImg(image);
  }
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
          <div className="Page-section">pequeña descripcion</div>
          <hr className="Page-line" />
          <div className="Page-section">{getCurrency(pageProduct.price)} + boton de compra</div>
          <hr className="Page-line" />
          <div className="Page-section">categoria: {pageProduct.category}</div>
        </div>
      </div>
      <div className="Page-Foot">
        <div className="Page-FootSection">
          <h1 className="FootSection-title">titulo</h1>
          <hr className="Page-line" />
          <div className="FootSection-text">descripcion toda lokita</div>
        </div>
        <div className="Page-FootSection">
          <h1 className="FootSection-title">titulo 2</h1>
          <hr className="Page-line" />
          <div className="FootSection-text">caracteristicas</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
