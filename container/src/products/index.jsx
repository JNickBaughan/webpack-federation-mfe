import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartIndex";
import React, { useRef, useEffect } from "react";

export default () => {
  const refProducts = useRef(null);
  const refCarts = useRef(null);

  useEffect(() => {
    mountCart(refCarts.current);
    mountProducts(refProducts.current);
  }, []);

  return (
    <div>
      <div ref={refProducts} />
      <div ref={refCarts} />
    </div>
  );
};
