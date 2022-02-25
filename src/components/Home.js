import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="home__Container">
        <div className="home__Content">
          <div className="content__Header">
            <h1>New Arrivals !</h1>
            <p>
              Shopping Mart, Try our newly Arrived collection explore here with
              new delightful experince .
            </p>
            <p>with new fashion way ,collect your simple outfit.</p>
          </div>
          <NavLink to="/product">
          <button className="shop__Btn">Shop the Collection </button>
          </NavLink>
        </div>

        <div className="card">
          <div className="card__ContainerOne">
            <div className="card__Description">
              <span>Shop the collection</span>
              <h4>Women's</h4>
            </div>
          </div>
          <div className="card__ContainerTwo">
            <div className="card__Description">
              <span>Shop the collection</span>
              <h4>Men's</h4>
            </div>
          </div>
          <div className="card__ContainerThree">
            <div className="card__Description">
              <span>Shop the collection</span>
              <h4>Accessories</h4>
            </div>
          </div>
        </div>
        <div className="frontlabel_Row">
          <div className="shirt_Label">
          <img className="shirt__Img"src="https://static.thenounproject.com/png/2063658-200.png" alt="" />
          <div className="label__Content">
            <h4> FREE RETURN</h4>
            <p> Not what expected?Place it back on the parceland attach the bill</p>
          </div>
          </div>
          <div className="shirt_Label">
          <img className="shirt__Img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmpUfcHh65cwdEuFSQ6klxtvVofMU1WZA9scie0znAvM3LnQsjeDGhxAnr1Rkq1jJMGI&usqp=CAU" alt="" />
          <div className="label__Content">
            <h4> SAME DAY DELIVERY </h4>
            <p> We offera delivery services that has never been done before .Checkout today and recive your products within hours</p>
          </div>
          </div>
          <div className="shirt_Label">
          <img className="shirt__Img"src="https://static.thenounproject.com/png/2063658-200.png" alt="" />
          <div className="label__Content">
            <h4> ALL YEAR DISCOUNT </h4>
            <p>Looking for a deel ? You can use the code "ALL YEAR" at checkout and get money off all year around </p>
          </div>
          </div>

        </div>
        <div className="footer__Container">
          <div className="footer__LogoColoumn">
          <img className="footer__Logo"src="https://seeklogo.com/images/P/phoenix-bird-logo-78F2C24DA2-seeklogo.com.png" alt="" />
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

      </div>
    </div>
  );
}

export default Home;
