import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { calculateCartQuantity } from "../data/cart.js";
// import '../data/cart-class.js';
import '../data/backend-practice.js';

const cartQuantity = calculateCartQuantity();

renderCheckoutHeader(cartQuantity);
renderOrderSumary();
renderPaymentSummary();