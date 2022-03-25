import axios from "axios";
import React from "react";
import "../style/FrontHeader.css";
import Search from "./Search";
import { useStateValue } from "./StateProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { useNotifications } from "@mantine/notifications";
import { Check } from "@material-ui/icons";
import { green, grey } from "@mui/material/colors";

function FrontHeader() {
  const navigate = useNavigate();
  const notifications = useNotifications();

  const userName = localStorage.getItem("user");
  console.log("local storage user", userName);
  const auth = useAuth();

  //remove the underline where represent as link
  const navLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive
        ? "rgba(255, 255, 255, 0.836)"
        : "rgba(255, 255, 255, 0.836)"
    };
  };

  //loging out user and clear all caches
  const logout = () => {
    notifications.showNotification({
      title: "Successfully Logout ",
      message: "Thanks for choosing  ABAEC !",
      icon: <Check size={18} />,
      color: "gray",
      autoClose: 1000
    });
    auth.logout();
    localStorage.clear();
    navigate("/");
  };

  const check = () => {
    if (userName) {
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
            <NavLink style={navLink} to={"/login"}>
              <h4>Sign in </h4>
            </NavLink>
          ) : (
            <h4 onClick={logout}>Logout </h4>
          )}
        </div>
        <div className="create__Account">
          {/* verify the user as admin or the customer */}

          {!userName ? (
            <h4 onClick={check}>Create an account</h4>
          ) : (
            <h4 onClick={check}>{userName}</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
