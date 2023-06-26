import React, { useContext, useState } from "react";
import LanguageContext from "../../../context/LanguageContext";
import "./Catalogue.css";
import ProductItem from "./Product/ProductItem";
import data from "./data";
import CurrencySelect from "../../../changeRates/CurrencySelect/CurrencySelect";
import ShoppingCart from "../../User/ShoppingCart/ShoppingCart";
import Filter from "./Filter/Filter";
import ProductPage from "./Product/ProductPage/ProductPage";

const Catalogue = () => {
  const { productItems } = data;
  const [products, setProducts] = useState(productItems);
  const [cartItems, setCartItems] = useState([]);

  const [pageProduct, setPageProduct] = useState([]);
  const [Pagetoggle, setPageToggle] = useState(false);

  const [toggle, setToggle] = useState(false);

  const toggleCart = () => {
    setToggle(!toggle);
  };
  const togglePage = (productData) => {
    setPageToggle(true);
    setPageProduct(productData);
  };
  const ClosePage = () => {
    setPageToggle(false);
  };

  const handleAddProduct = (product) => {
    const Productexist = cartItems.find((item) => item.id === product.id);
    if (Productexist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...Productexist, quantity: Productexist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const Productexist = cartItems.find((item) => item.id === product.id);
    if (Productexist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...Productexist, quantity: Productexist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClear = () => {
    setCartItems([]);
  };
  const SetFilter = (filter) => {
    const filteredItem = products.filter((item) => item.category === filter);
    if (products === productItems) {
      setProducts(filteredItem);
    } else {
      setProducts(productItems);
    }
  };
  const SetFilterPrice = (filterA, filterB) => {
    const pricedItem = products.filter(
      (item) => item.price >= filterA && item.price <= filterB
    );
    if (products === productItems) {
      setProducts(pricedItem);
    } else {
      setProducts(productItems);
    }
  };
  return (
    <body className="Catalogue">
      <div className="catalogue-header">
        <div>
          <CurrencySelect />
        </div>
        <div className="Catalogue-cart">
          <button className="Cart-button" onClick={toggleCart}>
            {cartItems.length === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="Cart-svg"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="Cart-svg"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="Catalogue-Products">
        <Filter SetFilter={SetFilter} SetFilterPrice={SetFilterPrice}></Filter>
        <ProductItem
          products={products}
          handleAddProduct={handleAddProduct}
          togglePage={togglePage}
        ></ProductItem>
      </div>
      <div>
        <ShoppingCart
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClear={handleCartClear}
          toggle={toggle}
          toggleCart={toggleCart}
        ></ShoppingCart>
      </div>
      <div>
        <ProductPage
          Pagetoggle={Pagetoggle}
          pageProduct={pageProduct}
          ClosePage={ClosePage}
        />
      </div>
    </body>
  );
};

export default Catalogue;
