const cartIcon = document.querySelector(".cart-icon");
const btnCheckOut = document.querySelector(".checkout-btn");
const btnMen = document.querySelector(".men");
const shippingHeader = document.querySelector(".shipping-header");
const homePage = document.querySelector(".homePage");
const confirmationBtn = document.querySelector(".confirmation-header");

let totalBill = 0;
let listProducts = [];
const carts = JSON.parse(localStorage.getItem("cart"));

const addCartToHTML = function (carts) {
  if (carts.length > 0) {
    carts.forEach((cart) => {
      let productPosition = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );

      totalBill += listProducts[productPosition].price * cart.quantity;
    });
  }
  document.querySelector(".subtotal").textContent = `$${totalBill.toFixed(2)}`;
};

const initApp = function () {
  fetch("/products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      addCartToHTML(carts);

      if (localStorage.getItem("cart")) {
        const carts = JSON.parse(localStorage.getItem("cart"));
      }
    });
};
initApp();

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
