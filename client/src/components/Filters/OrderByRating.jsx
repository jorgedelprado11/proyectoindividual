import { useDispatch } from "react-redux";
import { orderByRating } from "../../redux/actions/actions";
import "./Filters.css";

const OrderByRating = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(orderByRating(event.target.value));
  };

  return (
    <>
      <div className="container-filter">
        <label className="label">Order By Rating: </label>
        <select className="selector" onChange={onSelectedChange}>
          <option value="" hidden>
            Select
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
    </>
  );
};

export default OrderByRating;
