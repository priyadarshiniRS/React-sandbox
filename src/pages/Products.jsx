import React from "react";
import Product from "../components/Product";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, getProducts } from "../store/action";

class Products extends React.Component {
  componentWillMount() {
    this.props.getProducts(this.props.match.params.category);
  }
  navigateToDetail = (item, ind) => {
    this.props.history.push(`/product/${ind}`);
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.products.map((item, ind) => (
          <div>
            <div style={{ margin: "10px" }}>
              <Product
                goToDetail={this.navigateToDetail.bind(this, item, ind)}
                addToCart={(qty) => {
                  this.props.addToCart({ ...item, qty });
                }}
                key={item.id}
                {...item}
              />
            </div>
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
  addToCart: (payload) => dispatch(addToCart(payload)),
  getProducts: (payload) => dispatch(getProducts(payload))
});
const routerWrapper = withRouter(Products);

export default connect(mapStateToProps, mapdispatchToProps)(routerWrapper);
