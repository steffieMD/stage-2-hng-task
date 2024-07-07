"use strict";

// Elements
const listProduct = document.querySelector(".listProduct");

let productList = [];

listProduct.addEventListener("click", () => alert("hi!"));

const addProductListtoHTML = function () {
  listProduct.innerHTML = "";

  if (productList.length > 0) {
    productList.forEach((item) => {
      const html = `<div class="item">
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

const initApp = function () {
  fetch("/products.json")
    .then((response) => response.json())
    .then((data) => {
      productList = data;
      addProductListtoHTML();
    });
};
initApp();
