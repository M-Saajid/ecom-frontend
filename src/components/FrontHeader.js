import axios from "axios";
import React from "react";
import "../style/FrontHeader.css";
import Search from "./Search";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function FrontHeader() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");
  console.log("local storage user", userName);

  const login = () => {
    navigate("/login");
  };

  //loging out user and clear all caches
  const logout = () => {
    navigate("/");
    localStorage.clear();
  };

  const check = () => {
    if (userName === "admin1200") {
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
            <h4 onClick={login}>Sign in </h4>
          ) : (
            <h4 onClick={logout}>Logout </h4>
          )}
        </div>
        <div className="create__Account">
          {/* verify the user as admin or the customer */}
          {!userName ? (
            <h4 onClick={check}>Create an account</h4>
          ) : (
            <h4>{userName}</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
