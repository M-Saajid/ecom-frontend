import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useStateValue } from "../store/StateProvider";

function SearchProduct() {
  const [searchResults, setSearcResults] = useState({});
  const search = localStorage.getItem("searchkey");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    //  getting the all items where user search for
    async function fetchData() {
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/search`,
          {
            title: search
          },
          {
            headers: { authorization: token }
          }
        );

        // updating all the user prefer items to usestate
        setSearcResults(result.data.data.foundItems);
      } catch (error) {
        console.log("this is the error", error);
      }
    }
    fetchData();
  }, [searchResults]);

  return (
    // view all search products
    <div className="Product">
      {/* pass all searched items to card element  */}
      {searchResults.length > 0 ? (
        searchResults.map((c) => {
          return (
            <ProductCard
              key={c._id}
              id={c._id}
              image={c.image}
              title={c.title}
              description={c.description}
              price={c.price}
              rating={c.rating}
              quantity={c.quantity}
            />
          );
        })
      ) : (
        <h1> Search not found</h1>
      )}
    </div>
  );
}

export default SearchProduct;
