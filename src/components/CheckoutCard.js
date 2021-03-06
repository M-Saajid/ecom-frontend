import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme
} from "@mantine/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../store/StateProvider";
import { Rating } from "@mui/material";
function ProductCard(props) {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [{}, dispatch] = useStateValue();

  //removing the items from the basket  from the reducer
  const removeItems = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id
    });
  };

  //steps to  access the image through url
  const fileUrl = props.image.replace(/\\/g, "/");
  const imageArray = fileUrl.split("/");
  const imageUrl = `${process.env.REACT_APP_BASE_URL}/${imageArray[1]}`;

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
          <Image src={imageUrl} height={160} alt="Norway" />
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
          onClick={removeItems}
        >
          Remove Item
          <DeleteIcon style={{ marginLeft: 20 }} />
        </Button>
      </Card>
    </div>
  );
}

export default ProductCard;
