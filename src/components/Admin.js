import React, { useEffect, useState } from "react";
import "../style/Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validations/Addproducts";
import { useNotifications } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";
import { Alert, Rating, Snackbar, TextField } from "@mui/material";

function Admin() {
  const navigate = useNavigate();
  const notifications = useNotifications();
  const [values, setValues] = useState(false);
  const [open, setOpen] = React.useState(false);
  //check user is clicked the submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  //intitialize the value of details to null
  const [details, setDetails] = useState({});
  //handling the image file
  const [files, setFiles] = useState();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //onhandlechange the input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  //submit the values added by the form
  const send = async (e) => {
    e.preventDefault();
    console.log("this is the file", files);

    setErrors(validate(details, files, values));
    setOpen(true);
    setIsSubmitting(true);
  };

  useEffect(async () => {
    // check if any validation errors are presentand user have selected the image
    if (Object.keys(errors).length === 0 && isSubmitting && files) {
      const data = new FormData();
      data.append("title", details.title);
      data.append("description", details.desc);
      data.append("price", details.price);
      data.append("rating", values);
      data.append("quantity", details.quantity);
      data.append("category", details.category);
      data.append("productImage", files);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/items`,
          data
        );
        console.log(response);
        // notification settings
        const id = notifications.showNotification({
          loading: true,
          title: "Product added Successful ",
          message: "update successfull",
          autoClose: false,
          disallowClose: true
        });
        setTimeout(() => {
          notifications.updateNotification(id, {
            id,
            color: "teal",
            title: "Product added Successful",
            icon: <CheckIcon />,
            autoClose: 500
          });
        }, 1000);

        navigate("/addminview");
      } catch (error) {
        console.log(error);
      }
    }
  }, [errors]);

  return (
    <div className="admin">
      <div className="admin__component">
        <h2>Add products</h2>
        <form className="admin__form">
          <div className="admin__detail">
            <div className="input__Fields">
              <TextField
                error={errors.title && true}
                helperText={errors.title && `${errors.title}`}
                id="outlined-basic"
                label="Enter the tittle"
                name="title"
                variant="outlined"
                size="small"
                onChange={handleChange}
                sx={{
                  m: 1,
                  width: "25ch",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
            <div className="input__Fields">
              <TextField
                error={errors.price && true}
                helperText={errors.price && `${errors.price}`}
                id="outlined-basic"
                label="Enter the price"
                name="price"
                variant="outlined"
                size="small"
                onChange={handleChange}
                sx={{
                  m: 1,
                  width: "25ch",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
            <div className="input__Fields">
              <TextField
                error={errors.desc && true}
                helperText={errors.desc && `${errors.desc}`}
                id="outlined-basic"
                label="Enter the description"
                name="desc"
                variant="outlined"
                size="small"
                onChange={handleChange}
                sx={{
                  m: 1,
                  width: "25ch",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
            <div className="input__Fields">
              <Rating
                name="rate half-rating"
                value={values}
                onChange={(event, newValue) => {
                  setValues(newValue);
                }}
              />
              {errors.rating && <p className="alert"> Rating required !</p>}
            </div>
            <div className="input__Fields">
              <TextField
                error={errors.quantity && true}
                helperText={errors.quantity && `${errors.quantity}`}
                id="outlined-basic"
                label="Enter the quantity"
                name="quantity"
                variant="outlined"
                size="small"
                onChange={handleChange}
                sx={{
                  m: 1,
                  width: "25ch",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
            <div className="input__Fields">
              <TextField
                error={errors.category && true}
                helperText={errors.category && `${errors.category}`}
                id="outlined-basic"
                label="Enter the category"
                name="category"
                variant="outlined"
                size="small"
                onChange={handleChange}
                sx={{
                  m: 1,
                  width: "25ch",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
            <input
              type="file"
              name="file"
              onChange={(event) => {
                const file = event.target.files[0];
                setFiles(file);
              }}
            />
            {errors.filse && <p className="alert">{errors.filse}</p>}
          </div>
          <button type="submit" onClick={send}>
            Submit
          </button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please fill the required field !
            </Alert>
          </Snackbar>
        </form>
      </div>
    </div>
  );
}

export default Admin;
