import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Grid } from "@material-ui/core";

function AdminNav({ handleShowUsers, handleShowProducts }) {
  const liStyle = {
    textDecoration: "none",
    listStyle: "none",
  };
  const marginLi = {
    margin: "20px 0",
  };
  return (
    <div className="admin__nav">
      <div>
        <div className="admin__nav--title"> Main</div>
        <ul style={liStyle}>
          <li style={marginLi}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <DashboardIcon />
              </Grid>
              <Grid item>Dashboard</Grid>
            </Grid>
          </li>
        </ul>
      </div>
      <div>
        <div className="admin__nav--title">LISTS</div>
        <ul style={liStyle}>
          <li onClick={handleShowUsers} style={{ marginBottom: "20px" }}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <PersonIcon />
              </Grid>
              <Grid item>Users</Grid>
            </Grid>
          </li>
          <li onClick={handleShowProducts}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <InventoryIcon />
              </Grid>
              <Grid item>Products</Grid>
            </Grid>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
