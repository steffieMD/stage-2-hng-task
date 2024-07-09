const cartIcon = document.querySelector(".cart-icon");
const btnCheckOut = document.querySelector(".checkout-btn");
const btnMen = document.querySelector(".men");
const paymentHeader = document.querySelector(".payment");
const homePage = document.querySelector(".homePage");
console.log(homePage);

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});

cartIcon.addEventListener("click", function () {
  window.location = "/cart-page/cart.html";
});

btnCheckOut.addEventListener("click", function () {
  window.location = "/checkout-page-2/checkout.html";
});

paymentHeader.addEventListener("click", function () {
  window.location = "/checkout-page-2/checkout.html";
});

homePage.addEventListener("click", function () {
  window.location = "/index.html";
});
