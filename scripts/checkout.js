import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { calculateCartQuantity, loadCart } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";

// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
        // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve("value3");
      });
    });
  } catch (error) {
    console.log("Unexpected error. Please try again later.");
  }

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
