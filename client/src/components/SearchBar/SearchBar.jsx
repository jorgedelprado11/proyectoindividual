import "./SearchBar.css";

const SearchBar = ({
  handleChange,
  handleSubmit,
  searchName,
  setSearchName,
}) => {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="search"
        placeholder="Search"
        value={searchName}
        onChange={(event) => handleChange(event)}
      />
      <button
        className="searchbar-btn"
        type="submit"
        onClick={(event) => {
          handleSubmit(event);
          setSearchName("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
