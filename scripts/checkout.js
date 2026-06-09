import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { calculateCartQuantity } from "../data/cart.js";

const cartQuantity = calculateCartQuantity();

renderCheckoutHeader(cartQuantity);
renderOrderSumary();
renderPaymentSummary();
