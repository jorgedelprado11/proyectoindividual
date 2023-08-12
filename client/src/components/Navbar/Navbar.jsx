import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/actions";
import logo from "../../image/logo.png";
import "./Navbar.css";
import SearchBar from "./../SearchBar/SearchBar";
import { Link } from "react-router-dom";

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
    <nav className="navbar">
      <div className="container-logo">
        <span className="sidebar">sidebar</span>
        <Link className="logo" to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Link className="create" to="/create">
        {" "}
        [+]{" "}
      </Link>
    </nav>
  );
};

export default Navbar;
