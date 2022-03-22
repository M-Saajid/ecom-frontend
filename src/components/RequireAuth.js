import React from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "./auth";
import { useHistory } from "react-router-dom";
export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  let history = useHistory();
  if (!auth.user) {
    history.push("/");
    // return <Navigate to="/login" />;
    // navigate("/");
  }
  return children;
};
