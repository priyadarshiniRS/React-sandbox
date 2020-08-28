import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";
// import { Card, CardContent } from "material-ui";
class Home extends React.Component {
  fetchProducts = (type) => {
    this.props.history.push(`/products/${type}`);
  };
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Card
            style={{ height: "100%", padding: "10px" }}
            onClick={this.fetchProducts.bind(this, "all")}
          >
            All Products
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card
            style={{ height: "100%", padding: "10px" }}
            onClick={this.fetchProducts.bind(this, "clothing")}
          >
            Clothing
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card
            style={{ height: "100%", padding: "10px" }}
            onClick={this.fetchProducts.bind(this, "footwear")}
          >
            Footwear
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card
            style={{ height: "100%", padding: "10px" }}
            onClick={this.fetchProducts.bind(this, "accessory")}
          >
            Accessory
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Home);
