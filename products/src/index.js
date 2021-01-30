import faker from "faker";

let Products = "";

for (let i = 0; i < 5; i++) {
  Products += `<p>${faker.commerce.productName()}</p>`;
}

document.getElementById(
  "products-container"
).innerHTML = `<div><h2>Buy some stuff: </h2><br /> ${Products}`;
