import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const context = useContext(DataContext);
  const currentUser = context.currentUser;
  if (currentUser) {
    console.log("currentUser >>>>", currentUser);
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
