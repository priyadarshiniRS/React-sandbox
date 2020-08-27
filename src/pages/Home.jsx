import React from "react";
import { Link } from "react-router-dom";
// import { Card, CardContent } from "material-ui";

export default class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div>
          <div style={{ padding: "20px" }}>
            <Link to="/Products">Products</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </div>
    );
  }
}
