import "./Home.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";

import Cards from "../../components/Cards/Cards";
import Navbar from "./../../components/Navbar/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);

  useEffect(() => {
    dispatch(getVideogames());

    // return(()=>{clear}) // con esto hago el desmontaje
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar />
      <Cards allVideogames={allVideogames} />
    </div>
  );
};

export default Home;
