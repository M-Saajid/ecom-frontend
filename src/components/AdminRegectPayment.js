import React from "react";
import AdminItems from "./AdminItems";

export const AdminRegectPayment = ({ children }) => {
  const userName = localStorage.getItem("user");
  if (userName === process.env.REACT_APP_ADMIN) {
    return <AdminItems />;
  }

  return children;
};
