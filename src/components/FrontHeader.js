import axios from "axios";
import React from "react";
import "../style/FrontHeader.css";
import Search from "./Search";
import { useStateValue } from "./StateProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function FrontHeader() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");
  console.log("local storage user", userName);
  const auth = useAuth();

  const login = () => {
    navigate("/login");
  };

  //loging out user and clear all caches
  const logout = () => {
    auth.logout();
    localStorage.clear();
    navigate("/");
  };

  const check = () => {
    if (userName === process.env.REACT_APP_ADMIN) {
      navigate("/addminview");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="auth__Header">
      <h4>ABAEC </h4>
      <div className="Search">
        <Search />
      </div>
      <div className="auth__Option">
        <div className="Signin">
          {!userName ? (
            <NavLink to={"/login"}>
              <h4>Sign in </h4>
            </NavLink>
          ) : (
            <h4 onClick={logout}>Logout </h4>
          )}
        </div>
        <div className="create__Account">
          {/* verify the user as admin or the customer */}
          <NavLink to={"/addminview"}>
            {!userName ? <h4>Create an account</h4> : <h4>{userName}</h4>}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
