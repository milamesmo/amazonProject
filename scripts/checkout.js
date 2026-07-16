import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { calculateCartQuantity, loadCart } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";

// import "../data/cart-class.js";
// import "../data/backend-practice.js";

Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  const cartQuantity = calculateCartQuantity();

  renderCheckoutHeader(cartQuantity);
  renderOrderSumary();
  renderPaymentSummary();
});