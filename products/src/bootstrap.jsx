import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const Product = ({ productName, amount, imageUrl }) => {
  console.dir(imageUrl);
  return (
    <div>
      {productName} - {amount}
      <img src={imageUrl} alt="missing image..." width="100" height="100"></img>
      <br />
      <br />
      <br />
    </div>
  );
};

const Products = () => {
  let products = [];
  const images = ["animals", "city", "food", "fashion", "city"];
  for (let i = 0; i < 5; i++) {
    products = [
      {
        productName: faker.commerce.productName(),
        amount: `${faker.finance.currencySymbol()}  ${faker.finance.amount()}`,
        imageUrl: faker.image[images[i]](),
      },
      ...products,
    ];
  }
  return (
    <ul>
      {products.map((pr, index) => {
        return (
          <Product
            key={`${index}_product`}
            amount={pr.amount}
            productName={pr.productName}
            imageUrl={pr.imageUrl}
          />
        );
      })}
    </ul>
  );
};

const mountProducts = (el) => {
  ReactDOM.render(<Products />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("products-container-dev");
  if (el) {
    mountProducts(el);
  }
}

export { mountProducts };
