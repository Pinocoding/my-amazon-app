import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUserId = context.currentUserId;
  const adminUID = {
    adminUID: process.env.REACT_APP_ADMIN_UID,
  };

  return currentUserId === adminUID.adminUID ? (
    { children }
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAdmin;
