import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import "./Payment.css";
import CurrencyContext from "../../../context/CurrencyContext";

const Payment = () => {
  const { texts } = useContext(LanguageContext);
  const {getCurrency,handleCurrency} = useContext(CurrencyContext);
  let precio = 50;
  return (
    <body className="divPayment">
      <select name="currency" onChange={handleCurrency}>
              <option value="USD">
                USD
              </option>
              <option value="ARS">
                ARS
              </option>
              <option value="CAD">
                CAD
              </option>
              <option value="MXN">
                MXN
              </option>
            </select>
            <h1>{getCurrency(precio)}</h1>
    </body>
  );
};

export default Payment;
