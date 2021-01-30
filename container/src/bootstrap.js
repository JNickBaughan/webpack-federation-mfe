import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cart from "./cart";
import Products from "./products";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/checkout" component={Cart} />
          <Route path="/" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
