import React from "react";
export default class Product extends React.Component {
  render() {
    const { img, desc, price, style, qty } = this.props;
    return (
      <div style={style}>
        <img src={img} alt={desc} />
        <br />
        <p>{desc}</p>
        <p>Price: {price}</p>
        <p>Qty: {qty ? qty : 1}</p>
      </div>
    );
  }
}
