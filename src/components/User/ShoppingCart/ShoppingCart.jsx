import React, { useContext } from "react";
import "./ShoppingCart.css";
import CurrencyContext from "../../../context/CurrencyContext";

const ShoppingCart = ({ cartItems, toggle, handleAddProduct, handleRemoveProduct }) => {
  const { getCurrency } = useContext(CurrencyContext);
  const total = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  return (
    <div className={`ShoppingCart ${toggle ? "isActive" : ""}`}>
      <div className="ShoppingCart-head">
        ShoppingCart {" "}
        {cartItems.length === 0 && (
          <div className="ShoppingCart-empty">empty</div>
        )}
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
              <button className="ShoppingCart-add" onClick={() => handleAddProduct(item)}>+</button>
              <div className="ShoppingCart-quantity">{item.quantity}</div>
              <button className="ShoppingCart-remove" onClick={() => handleRemoveProduct(item)}>-</button>
            </div>
            </div>
            <div className="ShoppingCart-Price">{getCurrency(item.price * item.quantity)}</div>
          </div>

        ))}
      </div>
      <div className="ShoppingCart-Footer">
      <div className="ShoppingCart-Total">
        <div>Total Price</div>
        <div>{getCurrency(total)}</div>
      </div>
      <button className="ShoppingCart-done">CheckOut</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
