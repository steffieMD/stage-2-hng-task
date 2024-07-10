"use strict";

// Elements
const listProduct = document.querySelector(".listProduct");
const cartIcon = document.querySelector(".cart-icon");
const homePage = document.querySelector(".homePage");
const headerEl = document.querySelector(".header");
const productListSection = document.querySelector(".productListSection");
const btnMen = document.querySelector(".men-link");

// Event Listeners
cartIcon.addEventListener("click", function () {
  window.location = "/cart-page/cart.html";
});

homePage.addEventListener("click", function () {
  window.location = "/index.html";
});

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});
