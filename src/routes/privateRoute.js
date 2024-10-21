import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken"); // Check for auth token

  return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
