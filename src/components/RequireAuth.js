import React, { useEffect } from "react";
import Login from "./Login";
import AdminItems from "./AdminItems";

export const RequireAuth = ({ children }) => {
  const userName = localStorage.getItem("user");
<<<<<<< HEAD

||||||| 0be5210
  const auth = useAuth();
=======
>>>>>>> jwttocken
  if (userName === process.env.REACT_APP_ADMIN) {
    return <AdminItems />;
  } else {
    return <Login />;
  }
<<<<<<< HEAD
||||||| 0be5210
  return children;
=======

  return children;
>>>>>>> jwttocken
};
