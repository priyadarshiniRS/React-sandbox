import React, { useState } from "react";
const Product = ({
  img,
  desc,
  price,
  style,
  qty: Qty,
  addToCart,
  goToDetail
}) => {
  const itemQty = Qty ? Qty : 1;
  const [qty, setQty] = useState(itemQty);
  return (
    <div style={style}>
      <img src={img} alt={desc} onClick={goToDetail} />
      <br />
      <p>{desc}</p>
      <p>Price: {price}</p>
      <p>
        Qty:{" "}
        <input
          value={qty ? qty : 1}
          onChange={(e) => setQty(Number(e.target.value))}
        />
      </p>
      {addToCart && (
        <button
          onClick={(event) => {
            // event.stopPropagation();
            addToCart(qty);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default Product;
