import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import UserList from "./pages/UserManagement/UserList";
import CreateUser from "./pages/UserManagement/CreateUser";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Header from "./components/Header";
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Header = React.lazy(() => import("./components/Header"));
const Admin = React.lazy(() => import("./pages/UserManagement/Admin"));
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/products/:category" component={Products}></Route>
            <Route path="/product/:id" component={ProductDetail}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/user">
              <Route path="/" component={Admin} />
              <Route path="/user/list" component={UserList} />
              <Route path="/user/create" component={CreateUser} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
