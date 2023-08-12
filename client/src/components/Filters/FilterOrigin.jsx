import { useDispatch } from "react-redux";
import { originFilter } from "../../redux/actions/actions";

const FilterOrigin = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(originFilter(event.target.value));
  };

  return (
    <>
      <select className="selector" onChange={onSelectedChange}>
        <option value="" hidden>
          Select Origin
        </option>
        <option value="AllOrigins">All Origins</option>
        <option value="API">API</option>
        <option value="DB">DB</option>
      </select>
    </>
  );
};

export default FilterOrigin;
