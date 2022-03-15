import axios from "axios";
import React, { useState } from "react";
import "../style/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import baseUrl from "./url";
function CreateAccount() {
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  //onhandling the  input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  // register the user  and navigate to the products
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, {
        username: details.username,
        email: details.email,
        password: details.password
      });
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="register__Banner">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
          alt="/"
        />
        <div className="register__Container">
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Enter the username"
          ></input>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter the Email"
          ></input>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter the password"
          ></input>
          <button type="submit" onClick={handleSubmit} className="Signin">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
