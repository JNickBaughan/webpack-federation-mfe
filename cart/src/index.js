import faker from "faker";

let shoppingCart = "";

for (let i = 0; i < 5; i++) {
  shoppingCart += `<p>${faker.commerce.productName()}</p>`;
}

document.getElementById("cart-container").innerHTML = shoppingCart;
