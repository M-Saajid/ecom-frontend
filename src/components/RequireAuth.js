import React from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
     <Navigate to="/login" />;
    // navigate("/");
  }
  return children;
};
