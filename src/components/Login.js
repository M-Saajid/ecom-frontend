import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import validate from "../validations/Login";
import Loginsocial from "./Loginsocial";
import { useAuth } from "./auth";
import { useNotifications } from "@mantine/notifications";
import { Check, Visibility } from "@material-ui/icons";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const notifications = useNotifications();
  const auth = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setDetails({ ...details, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setDetails({
      ...details,
      showPassword: !details.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        notifications.showNotification({
          title: "Successfully login ",
          message: "Welcome to ABAEC !",
          icon: <Check size={18} />,
          autoClose: 1000,
          color: "teal"
        });

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

        navigate("/");
      } catch (error) {
        console.log(error);
        alert("credential you entered incorrect,Please try again", error);
      }
    }
  }, [errors]);

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
          <TextField
            error={errors.username && true}
            helperText={errors.username && "Username Required !"}
            id="outlined-basic"
            label="username"
            name="username"
            variant="outlined"
            size="small"
            value={details.username}
            sx={{ m: 1, width: "25ch" }}
            onChange={handleChange("username")}
          />
          <TextField
            sx={{ m: 1, width: "25ch" }}
            error={errors.password && true}
            helperText={errors.password && "Password Required !"}
            id="outlined-basic"
            label="Password"
            size="small"
            type={details.showPassword ? "text" : "password"}
            value={details.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {details.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <button type="submit" onClick={handleSubmit} className="Signin">
            Sign in
          </button>
          {/* <div className="divider" /> */}
        </div>
        {/* <Loginsocial /> */}
      </div>
    </div>
  );
}

export default Login;
