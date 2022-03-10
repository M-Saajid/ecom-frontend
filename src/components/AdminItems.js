import React, { useEffect, useState } from "react";
import "../style/AdminItems.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemTable from "./ItemTable";
import AdminProduct from "./AdminProduct";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AdminItems() {
  const [itemDetail, setitemDetail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get("http://localhost:5000/api/items");
        setitemDetail(request.data.data.foundItems);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="admin">
      <div className="admin__ContainerHeader">
        <h2>All Products</h2>
        <div className="add_items">
          <p>Add Items</p>
          <NavLink to="/adminadd">
            <Fab size="small" color="black" aria-label="add">
              <AddIcon />
            </Fab>
          </NavLink>
        </div>
      </div>
      <div className="admin__ProductTable">
        {/* <ItemTable /> */}
        {itemDetail.map((c) => {
          return (
            <AdminProduct
              key={c._id}
              id={c._id}
              image={c.image}
              title={c.title}
              description={c.description}
              price={c.price}
              rating={c.rating}
              category={c.category}
              quantity={c.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AdminItems;
