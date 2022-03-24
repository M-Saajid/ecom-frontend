import React from "react";
import { useAuth } from "./auth";

import { Navigate } from "react-router";
import Login from "./Login";
import AdminItems from "./AdminItems";
export const RequireAuth = ({ children }) => {
  const userName = localStorage.getItem("user");

  const auth = useAuth();

  if (userName === process.env.REACT_APP_ADMIN) {
    return <AdminItems />;
    // return <Redirect to="/login" />
    // navigate("/");
  } else {
    return <Login />;
  }
  return children;
};
