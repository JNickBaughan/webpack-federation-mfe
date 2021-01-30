import("./bootstrap");
import React from "react";

export function Products() {
  return (
    <React.Fragment>
      <div id="products-container" />
      <h2>What's in your cart:</h2>
      <div id="cart-container" />
    </React.Fragment>
  );
}
