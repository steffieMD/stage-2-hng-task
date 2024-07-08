// Elements
const btnMen = document.querySelector(".men");
const checkOutList = document.querySelector(".cart-items");
const container = document.querySelector(".container");

let totalQuantity = 0;
let totalBill = 0;
let listProducts = [];

const addCartToHTML = function (carts) {
  checkOutList.innerHTML = "";
  if (carts.length > 0) {
    carts.forEach((cart) => {
      let carts = JSON.parse(localStorage.getItem("cart")) || [];
      // totalQuantity += cart.quantity;

      let productPosition = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );
      totalBill += listProducts[productPosition].price * cart.quantity;
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
  let itemInCart = carts.find((val) => val.product_id == product_id);

  if (itemInCart) {
    switch (type) {
      case "plus":
        itemInCart.quantity += 1;
        break;

      default:
        // get value if minus
        let valueChange = itemInCart.quantity - 1;
        if (valueChange > 0) {
          itemInCart.quantity = valueChange;
        } else {
          carts.splice(itemInCart, 1);
        }
        break;
    }
  }
  addCartToMemory(carts);
  // so that it updates
  addCartToHTML(carts);
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
container.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("minus") ||
    !e.target.classList.contains("plus")
  )
    return null;

  const product_id = e.target.closest(".item").dataset.id;
  let type = "minus";
  if (clicked.classList.contains("plus")) {
    type = "plus";
  }
  changeQuantity(product_id, type);
  console.log(product_id);
});

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});
