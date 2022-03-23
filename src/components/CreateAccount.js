import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import validate from "../validations/Register";

function CreateAccount() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

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
  const handleSubmit = (e) => {
    setErrors(validate(details));
    setIsSubmitting(true);
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
        navigate("/product");
      } catch (err) {
        console.log(err);
        alert("User already exsist");
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
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Enter the username"
            value={details.username}
          ></input>
          {errors.username && <p>{errors.username}</p>}
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter the Email"
            value={details.email}
          ></input>
          {errors.email && <p>{errors.email}</p>}

          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter the password"
            value={details.password}
          ></input>
          {errors.password && <p>{errors.password}</p>}

          <button type="submit" onClick={handleSubmit} className="Signin">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
