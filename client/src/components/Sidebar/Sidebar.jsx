import FilterGenres from "../Filters/FilterGenres";
import FilterOrigin from "../Filters/FilterOrigin";
import OrderByName from "../Filters/OrderByName";
import OrderByRating from "../Filters/OrderByRating";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="container-filters">
      <OrderByRating />
      <OrderByName />
      <FilterGenres />
      <FilterOrigin />
    </div>
  );
};

export default Sidebar;
