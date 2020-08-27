import React from "react";
import Product from "../components/Product";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../store/action";

class Products extends React.Component {
  navigateToDetail = (item, ind) => {
    this.props.history.push(`/product/${ind}`);
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.products.map((item, ind) => (
          <div>
            <div
              style={{ width: "25%", margin: "10px" }}
              onClick={this.navigateToDetail.bind(this, item, ind)}
            >
              <Product key={item.id} {...item} />
            </div>
            <button onClick={this.props.addToCart.bind(this, item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.productsReducer.products
});
const mapdispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCart(payload))
});
const routerWrapper = withRouter(Products);

export default connect(mapStateToProps, mapdispatchToProps)(routerWrapper);
