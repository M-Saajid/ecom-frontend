import axios from "axios";
import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import baseUrl from "./url";
function Login() {
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [details, setDetails] = useState();
  //handle login change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  // authenticate login and dispatch user details to reducer
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        username: details.username,
        password: details.password
      });
      dispatch({
        type: "SET_USER",
        user: response.data
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("credential you entered incorrect,Please try again");
    }
  };
  return (
    <div className="login">
      <div className="login__Banner">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
          alt="/"
        />
        <div className="login__Container">
          <input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Enter the Username"
          ></input>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter the password"
          ></input>
          <button type="submit" onClick={handleSubmit} className="Signin">
            Sign in
          </button>
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
