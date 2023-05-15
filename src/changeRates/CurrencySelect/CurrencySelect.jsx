import React, { useContext } from "react";
import "./CurrencySelect.css";
import CurrencyContext from "../../context/CurrencyContext";

const CurrencySelect = (props) => {
    const { getCurrency, handleCurrency } = useContext(CurrencyContext);
    return (
        <div className="Currency">
            <select className="Currency-select" name="currency" onChange={handleCurrency}>
                <option value="USD">USD</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BHD">BHD</option>
                <option value="BWP">BWP</option>
                <option value="BRL">BRL</option>
                <option value="GBP">GBP</option>
                <option value="BND">BND</option>
                <option value="BGN">BGN</option>
                <option value="CAD">CAD</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="AED">AED</option>
                <option value="EUR">EUR</option>
                <option value="HKD">HKD</option>
                <option value="HUF">HUF</option>
                <option value="ISK">ISK</option>
                <option value="INR">INR</option>
                <option value="IDR">IDR</option>
                <option value="IRR">IRR</option>
                <option value="ILS">ILS</option>
                <option value="JPY">JPY</option>
                <option value="KZT">KZT</option>
                <option value="KWD">KWD</option>
                <option value="LYD">LYD</option>
                <option value="MYR">MYR</option>
                <option value="MUR">MUR</option>
                <option value="MXN">MXN</option>
                <option value="NPR">NPR</option>
                <option value="NZD">NZD</option>
                <option value="NOK">NOK</option>
                <option value="OMR">OMR</option>
                <option value="PKR">PKR</option>
                <option value="PHP">PHP</option>
                <option value="PLN">PLN</option>
                <option value="QAR">QAR</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SGD">SGD</option>
                <option value="ZAR">ZAR</option>
                <option value="KRW">KRW</option>
                <option value="LKR">LKR</option>
                <option value="SEK">SEK</option>
                <option value="CHF">CHF</option>
                <option value="TWD">TWD</option>
                <option value="THB">THB</option>
                <option value="TTD">TTD</option>
                <option value="TRY">TRY</option>
                <option value="VES">VES</option>

            </select>
            {props.example ? <h3 className="Currency-h3">{getCurrency(1)}</h3> : ""}
        </div>
    );
}

export default CurrencySelect