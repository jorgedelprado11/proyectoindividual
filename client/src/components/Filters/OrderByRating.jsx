import { useDispatch } from "react-redux";
import { orderByRating } from "../../redux/actions/actions";

const OrderByRating = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(orderByRating(event.target.value));
  };

  return (
    <>
      <select className="selector" onChange={onSelectedChange}>
        <option value="" hidden>
          Select Order Rating
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </>
  );
};

export default OrderByRating;
