import React, { useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Center
} from "@mantine/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import {
  autocompleteClasses,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [{}, dispatch] = useStateValue();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  //   delete items
  const DeleteItem = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/items/${props.id}`
      );
      console.log(response);
      window.location.reload();
      // navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };
  //upload the item to reducer so admin can update the specific from the update ui
  const UpdateItem = () => {
    dispatch({
      type: "ADD_TO_UPDATES",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        description: props.description,
        quantity: props.quantity,
        category: props.category
      }
    });
    navigate("/addminUpdate");
  };
  //steps to  access the image through url
  const fileUrl = props.image.replace(/\\/g, "/");
  const imageArray = fileUrl.split("/");
  const imageUrl = `${process.env.REACT_APP_BASE_URL}/${imageArray[1]}`;
  console.log("this is image in card", imageUrl);

  return (
    <div
      style={{
        width: 340,
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src="https://5.imimg.com/data5/VB/NM/KZ/SELLER-6129601/man-s-cargo-pant-500x500.jpg"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{props.title}</Text>
          <Badge color={props.quantity > 0 ? "green" : "red"} variant="light">
            {props.quantity > 0 ? "In Stock" : "Out Of Stock"}
          </Badge>
        </Group>

        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, marginLeft: 50 }}
        >
          {props.description} .
        </Text>
        <Text
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5, marginLeft: 50 }}
        >
          We have only {props.quantity} PCS
        </Text>
        <h4 className="price">LKR {props.price}</h4>

        <Rating name="read-only" value={props.rating} readOnly />

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={UpdateItem}
        >
          Update
        </Button>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={handleClickOpen}
        >
          Delete
        </Button>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm delete "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure you need to  delete this item .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={DeleteItem}  autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductCard;
