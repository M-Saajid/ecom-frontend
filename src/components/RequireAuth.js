import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    // history.push("/");
    return <Navigate to="/login" />;
    // navigate("/");
  }
  return children;
};
