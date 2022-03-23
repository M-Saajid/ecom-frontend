import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../style/FrontNav.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function FrontNav() {
  const [{ basket }] = useStateValue();

  //remove the underline where represent as link
  const navLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive
        ? "rgba(255, 255, 255, 0.836)"
        : "rgba(255, 255, 255, 0.836)"
    };
  };

  return (
    <div className="front__Nav">
      <NavLink style={navLink} to="/">
        <img
          className="font__Logo"
          src="https://seeklogo.com/images/P/phoenix-bird-logo-78F2C24DA2-seeklogo.com.png"
          alt="/"
        />
      </NavLink>
      <div className="header__Nav">
        <div className="nav__Options">
          <span className="option_One">Women</span>
        </div>
        <div className="nav__Options">
          <span className="option__Two">Men</span>
        </div>
        <div className="nav__Options">
          <span className="option_Thre">Accesories</span>
        </div>
      </div>

      <div className="header_Basket">
        <NavLink style={navLink} to="/checkout">
          <ShoppingBasketIcon />
        </NavLink>
        <span className="basket__Count">{basket?.length}</span>
      </div>
    </div>
  );
}

export default FrontNav;
