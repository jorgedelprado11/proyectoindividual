import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions/actions";
import "./Filters.css";

const OrderByName = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(orderByName(event.target.value));
  };

  return (
    <>
   <div className="container-filter">
    <label className="label">Order By Name: </label>
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

export default OrderByName;
