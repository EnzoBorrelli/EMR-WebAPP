import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import CurrencySelect from "../../../changeRates/CurrencySelect/CurrencySelect";
import "./Payment.css";

const Payment = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <body className="Payment">
      <div className="Payment-Header">
        <CurrencySelect example={true}></CurrencySelect>
      <h1 className="Payment-h1">{texts.sections.Payment.Title}</h1>
      </div>
      <div className="Payment-div">
        <p className="Payment-p">{texts.sections.Payment.details}</p>
        <h2 className="Payment-h2">{texts.sections.Payment.cards}</h2>
        <p className="Payment-p">{texts.sections.Payment.cardsDetails}</p>
        <h2 className="Payment-h2">{texts.sections.Payment.Wallet}</h2>
        <p className="Payment-p">{texts.sections.Payment.WalletDetails}</p>
        <h2 className="Payment-h2">{texts.sections.Payment.wireTransfer}</h2>
        <p className="Payment-p">{texts.sections.Payment.WireDetails}</p>
        <h2 className="Payment-h2">{texts.sections.Payment.InvoiceTypes}</h2>
        <p className="Payment-p">{texts.sections.Payment.InvoiceDetails}</p>
      </div>
    </body>
  );
};

export default Payment;
