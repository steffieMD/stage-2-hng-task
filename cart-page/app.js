// Elements
const btnMen = document.querySelector(".men");
const checkOutList = document.querySelector(".cart-items");
const cart = document.querySelector(".cart");
const listProduct = document.querySelector(".listProduct");
const btnCheckOut = document.querySelector(".checkout-btn");

let totalBill = 0;
let listProducts = [];

// Functions
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

  // 7.5
  addCartToHTML(carts);
  // 8.5
  storeCart(carts);
};

const storeCart = function (carts) {
  localStorage.setItem("cart", JSON.stringify(carts));
};

const addCartToHTML = function (carts) {
  checkOutList.innerHTML = "";
  if (carts.length > 0) {
    carts.forEach((cart) => {
      let productPosition = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );
      checkOutList.insertAdjacentHTML(
        "beforebegin",
        `<div class="item" data-id="${cart.product_id}">
              <div class="item-image">
                <img src="/${
                  listProducts[productPosition].image
                }" alt="item in cart" />
              </div>
              <div class="item-info">
                <span>${listProducts[productPosition].name}</span>
                <span>Colour: Black</span>
                <span>Size: US 13</span>
                <span>Edit</span>
              </div>
              <div class="price-quantity">
                <span class="price">$${(
                  listProducts[productPosition].price * cart.quantity
                ).toFixed(2)}</span>
                <div class="edit-cart">
                  <div class="change-quantity">
                    <span class="minus">-</span>
                    <span class="quantity">${cart.quantity}</span>
                    <span class="plus">+</span>
                  </div>
                  <span class="delete">Delete</span>
                </div>
              </div>
            </div>`
      );
    });
  }
};

const changeQuantity = function (product_id, type) {
  const carts = JSON.parse(localStorage.getItem("cart"));
  let positionInCart = carts.findIndex((val) => val.product_id == product_id);

  if (positionInCart >= 0) {
    switch (type) {
      case "plus":
        carts[positionInCart].quantity += 1;
        break;

      default:
        let valueChange = carts[positionInCart].quantity - 1;
        if (valueChange > 0) {
          carts[positionInCart].quantity = valueChange;
        } else {
          carts.splice(positionInCart, 1);
        }
        break;
    }
  }
  addCartToHTML(carts);
  storeCart(carts);
};

const initApp = function () {
  fetch("/products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;

      if (localStorage.getItem("cart")) {
        const carts = JSON.parse(localStorage.getItem("cart"));
        addCartToHTML(carts);
      }
    });
};
initApp();

// Event Listeners
cart.addEventListener("click", function (e) {
  const clicked = e.target;

  if (
    clicked.classList.contains("minus") ||
    clicked.classList.contains("plus")
  ) {
    const product_id = e.target.closest(".item").dataset.id;
    let type = "minus";
    if (clicked.classList.contains("plus")) {
      type = "plus";
    }
    // 10.5
    changeQuantity(product_id, type);
  }
});

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});

btnCheckOut.addEventListener("click", function () {
  window.location = "/checkout-page/checkout.html";
});
