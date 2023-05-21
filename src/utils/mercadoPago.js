// SDK de Mercado Pago
import { configure } from "mercadopago";
// Agrega credenciales
configure({
  access_token: "TEST-3044912088708914-051711-a5257b954c9679f20e355db0d45c4bd8-1361166718",
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};

mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
  })
  .catch(function (error) {
    console.log(error);
  });
