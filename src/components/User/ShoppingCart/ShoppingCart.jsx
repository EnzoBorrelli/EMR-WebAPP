import React, { useContext } from "react";
import "./ShoppingCart.css";
import CurrencyContext from "../../../context/CurrencyContext";
import LanguageContext from "../../../context/LanguageContext";

const ShoppingCart = ({
  cartItems,
  toggle,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClear,
  toggleCart,
}) => {
  const { getCurrency } = useContext(CurrencyContext);
  const { texts } = useContext(LanguageContext);
  const total = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className={`ShoppingCart ${toggle ? "isActive" : ""}`}>
      <div className="ShoppingCart-head">
        ShoppingCart{" "}
        <button className="ShoppingCart-exit" onClick={toggleCart}>
          x
        </button>
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="ShoppingCart-list">
            <img
              src={item.image}
              alt={item.name}
              className="ShoppingCart-img"
            ></img>
            <div className="ShoppingCart-item">
              <div className="ShoppingCart-name">{item.name}</div>
              <div className="ShoppingCart-functions">
                <button
                  className="ShoppingCart-remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
                <div className="ShoppingCart-quantity">{item.quantity}</div>
                <button
                  className="ShoppingCart-add"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="ShoppingCart-Price">
              {getCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>
      <div className="ShoppingCart-Footer">
        <div className="ShoppingCart-Total">
          <div>{texts.sections.Catalogue.total}</div>
          <div>{getCurrency(total)}</div>
        </div>
        <button className="ShoppingCart-done">CheckOut</button>
      </div>
      <button className="ShoppingCart-Clear" onClick={() => handleCartClear()}>{texts.sections.Catalogue.clear}</button>
    </div>
  );
};

export default ShoppingCart;
