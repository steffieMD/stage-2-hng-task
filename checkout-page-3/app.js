const cartIcon = document.querySelector(".cart-icon");
const btnMen = document.querySelector(".men");
const shippingHeader = document.querySelector(".shipping-header");
const homePage = document.querySelector(".homePage");
const paymentBtn = document.querySelector(".payment-header");

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});

cartIcon.addEventListener("click", function () {
  window.location = "/cart-page/cart.html";
});

shippingHeader.addEventListener("click", function () {
  window.location = "/checkout-page/checkout.html";
});

homePage.addEventListener("click", function () {
  window.location = "/index.html";
});

paymentBtn.addEventListener("click", function () {
  window.location = "/checkout-page-2/checkout.html";
});
