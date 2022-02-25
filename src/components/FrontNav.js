import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../style/FrontNav.css";
function FrontNav() {
  return (
    <div className="front__Nav">
      <img
        className="font__Logo"
        src="https://seeklogo.com/images/P/phoenix-bird-logo-78F2C24DA2-seeklogo.com.png"
        alt="/"
      />
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
        <ShoppingBasketIcon />
        <span className="basket__Count">0</span>
      </div>
    </div>
  );
}

export default FrontNav;
