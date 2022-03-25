import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "./Card";
import ProductCard from "./ProductCard";
import { useStateValue } from "./StateProvider";

function SearchProduct() {
  const [{ search }] = useStateValue();
  const [searchResults, setSearcResults] = useState({});
  console.log("this is search ", search);
  
  useEffect(async () => {
    //  getting the all items where user search for
    if (search) {
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/search`,
          {
            title: search
          }
        );
        console.log("Search results", result.data.data.foundItems);
        // updating all the user prefer items to usestate
        setSearcResults(result.data.data.foundItems);
      } catch (error) {
        console.log("this is the error", error);
      }
      console.log("this is  results ", searchResults);
    }
  }, [search]);

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
