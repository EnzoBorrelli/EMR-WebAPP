import React from "react";
import "./PaymentMethods.css";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("TEST-c72098f4-51cc-433f-9d14-8a4bce44fe0d");

const PaymentMethods = () => {
  return (
    <body className="paymentMethods">
      <Wallet initialization={{ preferenceId: "preference" }} />
    </body>
  );
};

export default PaymentMethods;
