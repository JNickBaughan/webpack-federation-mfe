import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartIndex";

mountProducts(document.getElementById("products-container"));
mountCart(document.getElementById("cart-container"));
