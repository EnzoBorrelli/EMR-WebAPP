import React, { useContext } from "react";
import "./ProductItem.css";
import LanguageContext from "../../../../context/LanguageContext";
import CurrencyContext from "../../../../context/CurrencyContext";

const ProductItem = ({ productItems, handleAddProduct }) => {
  const { texts } = useContext(LanguageContext);
  const { getCurrency } = useContext(CurrencyContext);

  function categoryTraducer(category) {
    if (category === "velocista") {
      return texts.sections.Catalogue.speedy;
    } else {
      return category;
    }
  }

  return (
    <div className="Products">
      {productItems.map((productItem) => (
        <div className="Product-card">
          <div>
            <h3 className="Product-name">{productItem.name}</h3>
          </div>
          <div>
            <h3 className="Product-category">
              {texts.sections.Catalogue.Category}{" "}
              {categoryTraducer(productItem.category)}
            </h3>
          </div>
          <div>
            <img
              src={productItem.image}
              alt={productItem.name}
              className="Product-img"
            />
          </div>
          <div>
            <h3 className="Product-price">{getCurrency(productItem.price)}</h3>
          </div>
          <div>
            <button className="Product-btn" onClick={() => handleAddProduct(productItem)}>
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
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
