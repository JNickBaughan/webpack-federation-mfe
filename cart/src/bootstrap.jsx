import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const Item = ({ productName, amount }) => {
  return (
    <li>
      {productName} - {faker.finance.currencySymbol()}
      {amount}
    </li>
  );
};

const Cart = () => {
  let items = [];

  for (let i = 0; i < 5; i++) {
    items = [
      {
        productName: faker.commerce.productName(),
        amount: `${parseInt(faker.finance.amount(), 10)}`,
      },
      ...items,
    ];
  }
  const total = items.reduce((acc, item) => {
    return acc + parseInt(item.amount);
  }, 0);
  return (
    <React.Fragment>
      <ol>
        {items.map((item, inx) => {
          return (
            <Item
              key={`${inx}_item`}
              productName={item.productName}
              amount={item.amount}
            />
          );
        })}
      </ol>
      <p>Total: {total}</p>
    </React.Fragment>
  );
};

const mountCart = (el) => {
  ReactDOM.render(<Cart />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("cart-container-dev");
  if (el) {
    mountCart(el);
  }
}

export { mountCart };
