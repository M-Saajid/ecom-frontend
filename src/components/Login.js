import React from "react";
import "../style/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__Banner">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
          alt="/"
        />
        <div className="login__Container">
          <input type="text" placeholder="Enter the Email"></input>
          <input type="password" placeholder="Enter the password"></input>
          <button className="Signin">Sign in</button>
          <div className="divider" />
        </div>
        <div className="login__SocialContainer">
          <p>Login or Create Using Social-media accounts </p>
          <div className="Google">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
              className="icon"
            />
            <h4>Google</h4>
          </div>
          <div className="Facebook">
            <img
              src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
              alt=""
              className="icon"
            />
            <h4>Facebook</h4>
          </div>
          <div className="Twitter">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt=""
              className="icon"
            />
            <h4>Twitter</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
