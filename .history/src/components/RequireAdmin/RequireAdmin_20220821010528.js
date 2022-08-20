import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAdmin = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUserId = context.currentUserId;
  const adminUID = {
    adminUID: process.env.REACT_APP_ADMIN_UID,
  };
  console.log(adminUID.adminUID);
  return currentUserId === adminUID.adminUID ? (
    <Outlet />
  ) : (
    ""
    // <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAdmin;
