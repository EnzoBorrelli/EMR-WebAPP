import { React, createContext, useState } from "react";
import exchangeRates from "../changeRates/exchangeRates.json";

const CurrencyContext = createContext();
const InitialCurrency = "USD";

const CurrencyProvider = ({ children }) => {
  const [Currency, setCurrency] = useState(InitialCurrency);
  const currencies = exchangeRates;
  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };
  const getCurrency = (price) => {
    const rate = currencies[Currency];
    let correctPrice = price * rate;
    return String(correctPrice.toFixed(2)) + " " + Currency;
  };
  const data = { getCurrency, handleCurrency, Currency };
  return (
    <CurrencyContext.Provider value={data}>{children}</CurrencyContext.Provider>
  );
};

export { CurrencyProvider };
export default CurrencyContext;
