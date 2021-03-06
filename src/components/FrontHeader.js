import React, { useState } from "react";
import "../style/FrontHeader.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { useNotifications } from "@mantine/notifications";
import { Check } from "@material-ui/icons";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { Drawer } from "@mantine/core";

function FrontHeader() {
  const navigate = useNavigate();
  const notifications = useNotifications();
  const [opened, setOpened] = useState(false);
  const [pageView, setPageView] = useState();
  const userName = localStorage.getItem("user");
  const createdUser = localStorage.getItem("createdUser");
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

  const check = () => {
    if (userName === process.env.REACT_APP_ADMIN) {
      navigate("/addminview");
    } else {
      navigate("/");
    }
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
    setOpened(false);
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const login = () => {
    setPageView(true);
    setOpened(true);
  };

  const create = () => {
    setPageView(false);
    setOpened(true);
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
          <Drawer
            position="right"
            opened={userName ? false : opened}
            transition="rotate-left"
            transitionDuration={550}
            transitionTimingFunction="ease"
            onClose={() => setOpened(false)}
            size="xl"
          >
            {pageView ? <Login /> : <CreateAccount />}
          </Drawer>

          {!userName ? (
            <h4 onClick={create}>Create an account</h4>
          ) : (
            <h4 onClick={check}>{userName}</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default FrontHeader;
