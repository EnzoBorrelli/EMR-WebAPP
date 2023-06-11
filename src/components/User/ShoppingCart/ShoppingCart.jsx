import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({cartItems, toggle}) => {
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
            <div className="ShoppingCart-name">{item.name}</div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
