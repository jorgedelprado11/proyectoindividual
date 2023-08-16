import { useDispatch } from "react-redux";
import { originFilter } from "../../redux/actions/actions";
import "./Filters.css";

const FilterOrigin = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(originFilter(event.target.value));
  };

  return (
    <>
      <div className="container-filter">
        <label className="label">Filter By Origin: </label>
        <select className="selector" onChange={onSelectedChange}>
          <option value="" hidden>
            Select
          </option>
          <option value="AllOrigins">All Origins</option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
      </div>
    </>
  );
};

export default FilterOrigin;
