import React from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    const cartData = Object.values(cart);
    return (
      <div>
        {cartData.length ? (
          <div style={{ display: "flex" }}>
            {cartData.map((item, ind) => (
              <div>
                <Product key={item.id} {...item} />
                <button>Buy Now</button>
              </div>
            ))}
          </div>
        ) : (
          <p>
            Add Items to cart <br /> <Link to="/products">Go To Products</Link>
          </p>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.productsReducer.cart
});
const CartComp = connect(mapStateToProps, null)(Cart);
export default CartComp;
