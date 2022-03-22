import React from "react";
import { useAuth } from "./auth";

import { Navigate } from "react-router";
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  

  if (!auth.user) {
    // history.push("/");
    return <Navigate to="/login" />;
    // navigate("/");
  }
  return children;
};
