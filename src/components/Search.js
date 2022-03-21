import React, { useState } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import "../style/Search.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import baseUrl from "./url";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(" ");
  const [searchResults, setSearcResults] = useState([]);
  const [{}, dispatch] = useStateValue();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const send = (req, res) => {
    // getting the all items where user search for
    const searchHandle = async () => {
      dispatch({
        type: "EMPTY_SEARCH_BASKET"
      });
      try {
        const result = await axios.post(`${baseUrl}/api/search`, {
          title: search
        });
        console.log("Search results", result);
        // updating all the user prefer items to usestate
        setSearcResults(result.data.data);
      } catch (error) {
        console.log("this is the error", error);
      }
      // check where user has search or not
      if (searchResults.length != 0) {
        {
          //dispatch all the items to the reducer
          searchResults.foundItems.map((items) => {
            console.log("this is searched items ", items);
            dispatch({
              type: "SEARCH",
              item: {
                id: items._id,
                title: items.title,
                image: items.image,
                price: items.price,
                rating: items.rating,
                description: items.description
              }
            });
          });
        }
        setSearch("");
        navigate("/searchproduct");
      }
    };

    searchHandle();
  };
  return (
    <div className="search">
      <input className="search__Text" onChange={handleChange} type="text" />
      <PageviewIcon className="icon-material-u-i" onClick={send} />
    </div>
  );
}

export default Search;
