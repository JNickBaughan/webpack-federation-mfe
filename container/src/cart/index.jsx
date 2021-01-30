import { mountCart } from "cart/CartIndex";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountCart(ref.current);
  }, []);

  return <div ref={ref} />;
};
