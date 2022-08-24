import React, { useMemo, useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function AdminUser() {
  const context = useContext(DataContext);
  const usersList = context.usersList;
  const columns = useMemo(
    () => [
      {
        field: "displayName",
        headerName: "Full name",
        width: 150,
      },
      {
        field: "Email",
        headerName: "Email",
        width: 250,
      },
      {
        field: "Password",
        headerName: "Password",
        width: 150,
      },
      {
        field: "phoneNumber",
        headerName: "Phone Number",
        width: 200,
      },
      {
        field: "Address",
        headerName: "Address",
        width: 150,
      },
      {
        field: "timeStamp",
      },
    ],
    []
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        tittle="Users list"
        rows={usersList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.displayName}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export default AdminUser;
