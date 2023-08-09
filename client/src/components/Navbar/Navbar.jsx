import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/actions";

import "./Navbar.css";
import SearchBar from "./../SearchBar/SearchBar";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(searchName));
    setSearchName("");
  };

  return (
    <>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default Navbar;
