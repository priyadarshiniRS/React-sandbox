import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Admin = (props) => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <Link to="/user/list">Users</Link>
      <br />
      <Link to="/user/create">Create User</Link>
    </Grid>
    {props.children}
    <Grid item xs={9}></Grid>
  </Grid>
);
export default Admin;
