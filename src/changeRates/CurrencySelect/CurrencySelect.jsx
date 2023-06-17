import React, { useContext } from "react";
import "./CurrencySelect.css";
import CurrencyContext from "../../context/CurrencyContext";

const CurrencySelect = (props) => {
  const { getCurrency, handleCurrency, Currency } = useContext(CurrencyContext);
  return (
    <div className="Currency">
      <select
        className="Currency-select"
        name="currency"
        value={Currency}
        onChange={handleCurrency}
      >
        <option value="USD">USD</option>
        <option value="ARS">ARS</option>
        <option value="AUD">AUD</option>
        <option value="BRL">BRL</option>
        <option value="GBP">GBP</option>
        <option value="CAD">CAD</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="EUR">EUR</option>
        <option value="HKD">HKD</option>
        <option value="JPY">JPY</option>
        <option value="MXN">MXN</option>
        <option value="NZD">NZD</option>
        <option value="TTD">TTD</option>
      </select>
      {props.example ? <h3 className="Currency-h3">{getCurrency(1)}</h3> : ""}
    </div>
  );
};

export default CurrencySelect;
