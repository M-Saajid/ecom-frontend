import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import validate from "../validations/Login";
import Loginsocial from "./Loginsocial";
import { useAuth } from "./auth";
import { AtmSharp } from "@material-ui/icons";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({
    username: "",
    password: ""
  });

  const auth = useAuth();

  useEffect(async () => {
    // check if any validation errors are present
    if (Object.keys(errors).length === 0 && isSubmitting) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/login`,
          {
            username: details.username,
            password: details.password
          }
        );
        // //update the user name so we can access it from reducer and  get the mail id
        // dispatch({
        //   type: "SET_USER",
        //   user: response.data
        // });
        // setup local storage so we can access user name locaaly
        localStorage.setItem("user", response.data.data);
        auth.login(response.data.data);
        const results = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/searchcus`,
          {
            username: details.username
          }
        );
        dispatch({
          type: "SET_EMAIL",
          email: results.data.results[0].email
        });
        navigate(-1);
      } catch (error) {
        console.log(error);
        alert("credential you entered incorrect,Please try again", error);
      }
    }
  }, [errors]);

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
  const handleSubmit = (e) => {
    setErrors(validate(details));
    setIsSubmitting(true);
    auth.login(details.username);
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
            value={details.username}
          ></input>
          {errors.username && <p>{errors.username}</p>}
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter the password"
            value={details.password}
          ></input>
          {errors.password && <p>{errors.password}</p>}
          <button type="submit" onClick={handleSubmit} className="Signin">
            Sign in
          </button>
          <div className="divider" />
        </div>
        <Loginsocial />
      </div>
    </div>
  );
}

export default Login;
