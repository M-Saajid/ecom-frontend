import React from "react";
import "../style/CreateAccount.css";
function CreateAccount() {
  return (
    <div className="register">
      <div className="register__Banner">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
          alt="/"
        />
        <div className="register__Container">
          <input type="text" placeholder="Enter the Email"></input>
          <input type="password" placeholder="Enter the password"></input>
          <button className="Signin">Register</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
