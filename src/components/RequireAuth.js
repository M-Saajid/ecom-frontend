import React, { useEffect } from "react";
import Login from "./Login";
import AdminItems from "./AdminItems";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const userName = localStorage.getItem("user");
  useEffect(() => {
    if (userName === process.env.REACT_APP_ADMIN) {
      return <AdminItems />;
    } else {
      return <Login />;
    }
  }, []);

  return children;
};
