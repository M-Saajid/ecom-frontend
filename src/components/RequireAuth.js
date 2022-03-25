import React from "react";
import Login from "./Login";
import AdminItems from "./AdminItems";

export const RequireAuth = ({ children }) => {
  const userName = localStorage.getItem("user");

  if (userName === process.env.REACT_APP_ADMIN) {
    return <AdminItems />;
  } else {
    return <Login />;
  }
};
