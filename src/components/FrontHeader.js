import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import "../style/FrontHeader.css";
import Search from "./Search";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function FrontHeader() {
  const [{ basket, user }, dispatch] = useStateValue();
  const auth = useAuth();
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");
  console.log("local storage user", userName);
  //loging out user and clear all caches
  const login = () => {
    navigate("/login");
  };
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
  const navLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive
        ? "rgba(255, 255, 255, 0.836)"
        : "rgba(255, 255, 255, 0.836)"
    };
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
        <div className="create__Account" onClick={check}>
          {/* verify the user as admin or the customer */}
          {!userName ? <h4>Create an account</h4> : <h4>{userName}</h4>}
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
