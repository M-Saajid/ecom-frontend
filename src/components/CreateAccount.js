import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import validate from "../validations/Register";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
function CreateAccount() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false
  });
  const [errors, setErrors] = useState({});

  //onhandling the  input values
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



  // register the user  and navigate to the products
  const handleSubmit = (e) => {
    setErrors(validate(details));
    setIsSubmitting(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  useEffect(async () => {
    // check if any validation errors are present
    if (Object.keys(errors).length === 0 && isSubmitting) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/register`,
          {
            username: details.username,
            email: details.email,
            password: details.password
          }
        );
        window.location.reload();
        navigate("/");
      } catch (err) {
        console.log(err);
        setOpen(true);
      }
    }
  }, [errors]);

  return (
    <div className="register">
      <div className="register__Banner">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
          alt="/"
        />
        <div className="register__Container">
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
            error={errors.email && true}
            helperText={errors.email && `${errors.email} !`}
            type="email"
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            size="small"
            value={details.email}
            sx={{ m: 1, width: "25ch" }}
            onChange={handleChange("email")}
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
            Register
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"User Exist "}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                User already exist please login or create a new User
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
