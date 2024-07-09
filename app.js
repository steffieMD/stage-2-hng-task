"use strict";

// Elements
const listProduct = document.querySelector(".listProduct");
const cartIcon = document.querySelector(".cart-icon");
const homePage = document.querySelector(".homePage");
console.log(homePage);

let productList = [];

const addProductListtoHTML = function () {
  listProduct.innerHTML = "";

  if (productList.length > 0) {
    productList.forEach((item) => {
      const html = `<div class="item" data-id="${item.id}">
            <div class="item-title">
              <div class="item-name-rating">
                <h2>${item.name}</h2>
                <div class="rating">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <div class="like-item">
                <img src="media/svg/like-icon.svg" alt="" />
              </div>
            </div>
            <div class="img-div">
              <img src="${item.image}" alt="black clogs" />
            </div>
            <div class="price-size-cart">
              <div class="size-price">
                <div class="size-div">
                  <span class="size">Size:</span>
                  <button class="size-btn">US 12 &#8597;</button>
                </div>
                <div class="price">£${item.price}</div>
              </div>
              <button class="addCart">Add To Cart</button>
            </div>
          </div>`;
      listProduct.insertAdjacentHTML("beforeend", html);
    });
  }
};

const addToCart = function (product_id) {
  let carts = JSON.parse(localStorage.getItem("cart")) || [];

  const findProduct = carts.find((val) => val.product_id == product_id);

  if (findProduct) {
    findProduct.quantity += 1;
  } else {
    carts.push({
      product_id: product_id,
      quantity: 1,
    });
  }

  storeCart(carts);
};

const storeCart = function (carts) {
  localStorage.setItem("cart", JSON.stringify(carts));
};

const initApp = function () {
  fetch("/products.json")
    .then((response) => response.json())
    .then((data) => {
      productList = data;
      addProductListtoHTML();

      if (localStorage.getItem("cart")) {
        const carts = JSON.parse(localStorage.getItem("cart"));
        addProductListtoHTML(carts);
      }
    });
};
initApp();

// Event Listeners
listProduct.addEventListener("click", function (e) {
  if (!e.target.classList.contains("addCart")) return null;
  const product_id = e.target.closest(".item").dataset.id;
  addToCart(product_id);
});

cartIcon.addEventListener("click", function () {
  window.location = "/cart-page/cart.html";
});

homePage.addEventListener("click", function () {
  window.location = "/index.html";
});
