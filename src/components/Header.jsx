import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
    boxShadow: "0,0,0,0.5,0.5",
    marginBottom: "10px"
  }
};
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
