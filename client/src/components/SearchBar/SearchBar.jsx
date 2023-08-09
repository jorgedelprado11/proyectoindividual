import "./SearchBar.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="search-bar">
      <form onChange={(event) => handleChange(event)}>
        <input type="search" placeholder="Busqueda" />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
