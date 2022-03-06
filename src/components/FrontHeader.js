import React from "react";
import { NavLink } from "react-router-dom";
import "../style/FrontHeader.css";
function FrontHeader() {
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
      <div className="auth__Option">
        <div className="Signin">
          <NavLink style={navLink} to="/login">
            <h4>Sign in </h4>
          </NavLink>
        </div>
        <div className="create__Account">
          <NavLink style={navLink} to="/register">
            <h4>Create an account</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
