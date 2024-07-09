const cartIcon = document.querySelector(".cart-icon");
const btnCheckOut = document.querySelector(".checkout-btn");
const btnMen = document.querySelector(".men");
const shippingHeader = document.querySelector(".shipping-header");
const homePage = document.querySelector(".homePage");
const confirmationBtn = document.querySelector(".confirmation-header");

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});

cartIcon.addEventListener("click", function () {
  window.location = "/cart-page/cart.html";
});

btnCheckOut.addEventListener("click", function () {
  window.location = "/checkout-page-3/checkout.html";
});

shippingHeader.addEventListener("click", function () {
  window.location = "/checkout-page/checkout.html";
});

homePage.addEventListener("click", function () {
  window.location = "/index.html";
});

confirmationBtn.addEventListener("click", function () {
  window.location = "/checkout-page-3/checkout.html";
});
