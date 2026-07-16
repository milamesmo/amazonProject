import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { calculateCartQuantity, loadCart } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";

// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {

  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  });

  const cartQuantity = calculateCartQuantity();
  renderCheckoutHeader(cartQuantity);
  renderOrderSumary();
  renderPaymentSummary();
}

loadPage();

// Promise.all([
//   loadProductsFetch(),

//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then(() => {
//   const cartQuantity = calculateCartQuantity();

//   renderCheckoutHeader(cartQuantity);
//   renderOrderSumary();
//   renderPaymentSummary();
// });
