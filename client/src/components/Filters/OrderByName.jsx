import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions/actions";

const OrderByName = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(orderByName(event.target.value));
  };

  return (
    <>
      <select className="selector" onChange={onSelectedChange}>
        <option value="" hidden>
          Select Order Name
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </>
  );
};

export default OrderByName;
