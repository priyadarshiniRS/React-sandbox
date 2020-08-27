import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Welcome</Link>
          <br />
        </div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/product/:id" component={ProductDetail}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </div>
    </Router>
  );
}
