import FrontHeader from "./components/FrontHeader";
import FrontNav from "./components/FrontNav";
import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useState } from "react";
import CreateAccount from "./components/CreateAccount";
import Product from "./components/Product";
import CheckoutPage from "./components/CheckoutPage";
import Admin from "./components/Admin";
import AdminItems from "./components/AdminItems";
import AdminUpdate from "./components/AdminUpdate";
import Payment from "./components/Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SearchProduct from "./components/SearchProduct";
import UpdateCardView from "./components/UpdateCardView";
import { AuthProvider } from "./components/auth";
import { RequireAuth } from "./components/RequireAuth";
const promise = loadStripe(
  "pk_test_51J887XGHMWtYg6xLPWmnzfUQWvaLVp4z3DE5k2pjp8ZDJlvD2DFTxUu0J83gkzaUSrriT9g88J5NXM6TMbyn57aP00jnr1t036"
);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FrontHeader />
        <FrontNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/adminadd" element={<Admin />}></Route>
          <Route
            path="/addminview"
            element={
              <RequireAuth>
                <AdminItems />
              </RequireAuth>
            }
          ></Route>
          <Route path="/addminUpdate" element={<UpdateCardView />}></Route>
          <Route path="/searchproduct" element={<SearchProduct />}></Route>
          <Route
            path="/payment"
            element={
              <RequireAuth>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </RequireAuth>
            }
          ></Route>
        </Routes>{" "}
      </AuthProvider>
    </div>
  );
}

export default App;
