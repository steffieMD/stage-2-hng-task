// Elements
const btnMen = document.querySelector(".men");
const checkOutList = document.querySelector(".cart-items");
const cart = document.querySelector(".cart");
const listProduct = document.querySelector(".listProduct");
const btnCheckOut = document.querySelector(".checkout-btn");
const homePage = document.querySelector(".homePage");

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
  carts = JSON.parse(localStorage.getItem("cart"));
  checkOutList.innerHTML = "";
  if (carts.length > 0) {
    carts.forEach((cart) => {
      let productPosition = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );

      totalBill += listProducts[productPosition].price;

      checkOutList.insertAdjacentHTML(
        "afterbegin",
        ` <div class="item" data-id="${listProducts[productPosition].id}">
                <div class="item-image">
                  <img src="/${
                    listProducts[productPosition].image
                  }" alt="clogs" />
                </div>
                <div class="item-info-div">
                  <div class="item-info">
                    <span class="name"
                      >${
                        listProducts[productPosition].name
                      }                            
                    </span>
                    <div></div>

                    <div class="span-context">
                      <span>Colour:</span>
                      <span>Black</span>
                    </div>
                    <div class="span-context">
                      <span>Size:</span>
                      <span>US 13</span>
                    </div>
                    <span class="edit">Edit</span>
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
                </div>
              </div>`
      );
    });

    document.querySelector(".subtotal").textContent = `$totalBill.toFixed(2)`;
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
console.log(totalBill);

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
    changeQuantity(product_id, type);
  }
});

btnMen.addEventListener("click", function () {
  window.location = "/index.html";
});

btnCheckOut.addEventListener("click", function () {
  window.location = "/checkout-page/checkout.html";
});

homePage.addEventListener("click", function () {
  window.location = "/index.html";
});
