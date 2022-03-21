import React from "react";
import { NavLink } from "react-router-dom";
import "../style/FrontHeader.css";
import Search from "./Search";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function FrontHeader() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  console.log("this is user", user);
  const auth = useAuth();
  //loging out user and clear all caches
  const logout = () => {
    auth.logout();
    navigate("/");
    // if (user) {
    //   window.location.reload();
    //   navigate("/");
    // }
  };
  const check = () => {
    if (auth.user) {
      if (auth.user === "admin1200") {
        navigate("/addminview");
      }
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
          <NavLink style={navLink} onClick={logout} to={!user && "/login"}>
            {!auth.user ? <h4>Sign in </h4> : <h4>Logout </h4>}
          </NavLink>
        </div>
        <div className="create__Account" onClick={check}>
          {/* verify the user as admin or the customer */}
          {!auth.user ? <h4>Create an account</h4> : <h4>{auth.user}</h4>}
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
