import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
class ProductDetail extends React.Component {
  componentWillMount() {
    this.props.assignProduct(this.props.match.params.id);
    // console.log(this.props.history.location);
  }
  render() {
    // console.log(this.props);
    const { desc, img, detail, price, rating, instock } = this.props.product;
    return (
      <div>
        <Link to="/products">Back to list</Link>
        <div>
          <img src={img} alt={desc} />
        </div>
        <p>{desc}</p>
        <p>{detail}</p>
        <p>{price}</p>
        <p>Rating: {rating} </p>
        <p>{instock}</p>
        <button onClick={this.props.addToCart.bind(this, this.props.product)}>
          Add to Cart
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.productsReducer.product
});
const mapdispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch({ type: "ADD_TO_CART", payload }),
  assignProduct: (ind) => dispatch({ type: "ASSIGN_PRODUCT", param: ind })
});
const routeWrapper = withRouter(ProductDetail);
const ProductDetailPage = connect(
  mapStateToProps,
  mapdispatchToProps
)(routeWrapper);
export default ProductDetailPage;
