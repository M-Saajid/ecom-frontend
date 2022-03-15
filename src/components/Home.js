import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Home.css";
import Footer from "./footer";
import Featurelabel from "./features";
import Cards from "./viewCards";

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
        <Cards />
        <Featurelabel />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
