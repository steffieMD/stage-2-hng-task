const cartIcon = document.querySelector(".cart-icon");
const btnCheckOut = document.querySelector(".checkout-btn");
const btnMen = document.querySelector(".men");
const shippingHeader = document.querySelector(".shipping-header");

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});

cartIcon.addEventListener("click", function () {
  window.location = "/cart-page/cart.html";
});

btnCheckOut.addEventListener("click", function () {
  // window.location = "checkout-page-2/checkout.html";
  alert("STILL COOKING ;)");
});

shippingHeader.addEventListener("click", function () {
  window.location = "/checkout-page/checkout.html";
});
