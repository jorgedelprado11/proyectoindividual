import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, genresFilter } from "../../redux/actions/actions";
import "./Filters.css";

const FilterGenres = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(genresFilter(event.target.value));
  };

  return (
    <>
      <div className="container-filter">
        <label className="label">Filter By Genres: </label>
        <select className="selector" onChange={onSelectedChange}>
          <option value="" hidden>
            Select
          </option>
          <option value="AllGenres">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FilterGenres;
