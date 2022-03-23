import React, { useEffect, useState } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import "../style/Search.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(" ");
  const [{}, dispatch] = useStateValue();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const send = (req, res) => {
    dispatch({
      type: "SET_SEARCH_KEY",
      searchkey: search
    });
    navigate("/searchproduct");
  };
  return (
    <div className="search">
      <input className="search__Text" onChange={handleChange} type="text" />
      <PageviewIcon className="icon-material-u-i" onClick={send} />
    </div>
  );
}

export default Search;
