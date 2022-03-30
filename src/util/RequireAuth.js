import React, { useEffect } from "react";
import Login from "../components/Login";
import AdminItems from "../components/AdminItems";

export const RequireAuth = ({ children }) => {
  const userName = localStorage.getItem("user");

  if (userName === process.env.REACT_APP_ADMIN) {
    return <AdminItems />;
  } else {
    return <Login />;
  }
};
