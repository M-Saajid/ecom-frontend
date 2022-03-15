import React from "react";
import "../style/Home.css";
function footer() {
  return (
    <div className="footer__Container">
      <div className="footer__LogoColoumn">
        <img
          className="footer__Logo"
          src="https://seeklogo.com/images/P/phoenix-bird-logo-78F2C24DA2-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="footer__Col">
        <h4>Product</h4>
        <p>Watch</p>
        <p>Shirts</p>
        <p>Denium</p>
      </div>
      <div className="footer__Col">
        <h4>Company </h4>
        <p>who we are </p>
        <p>Press</p>
        <p>Careers</p>
      </div>
      <div className="footer__Col">
        <h4>Customer Services</h4>
        <p>Contact</p>
        <p>Shipping</p>
        <p>Returns</p>
      </div>
    </div>
  );
}

export default footer;
