import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
function AdminNav() {
  return (
    <div className="admin__nav">
      <div>
        <div><DashboardIcon/> Main</div>
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
      <div>
        <div>LISTS</div>
        <ul>
          <li>Users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
