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
import history from "./components/history";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      {user ? (
        <FrontHeader user={user} />
      ) : (
        <>
          <FrontHeader user={user} />
          <FrontNav />
        </>
      )}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<CreateAccount />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/adminadd" element={<Admin />}></Route>
          <Route path="/addminview" element={<AdminItems />}></Route>
        </Routes>

    </div>
  );
}

export default App;
