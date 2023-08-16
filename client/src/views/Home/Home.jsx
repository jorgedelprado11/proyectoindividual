import "./Home.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";

import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Sidebar from "./../../components/Sidebar/Sidebar";

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);

  //estados para manejar la paginación
  // const [games, setGames] = useState([]); //estado inicial array vacio
  // inicialmente iba a manejar los juegos con un estado local, hasta que me di cuenta que en realidad arriba en allVideogames estoy trayendo al estado global
  const totalGames = allVideogames.length; // cantidad de juegos
  const [gamesPerPage, setGamesPerPage] = useState(15); // inicialmente hay 15 juegos por page si quiero lo modifico
  const [currentPage, setCurrentPage] = useState(1); // pagina inicial 1
  const [loading, setLoading] = useState(true);

  const lastIndex = currentPage * gamesPerPage; // 15 para la primer pag (1*15)

  const firstIndex = lastIndex - gamesPerPage; // 0 para la primer pag (15-15)

  useEffect(() => {
    dispatch(getVideogames());
    // return(()=>{clear}) // con esto hago el desmontaje
  }, [dispatch]);

  setTimeout(() => {
    setLoading(false);
  }, 6000);
  return (
    <div className="home">
      <Sidebar />
      <div className="principal">
        <Pagination
          gamesPerPage={gamesPerPage}
          totalGames={totalGames}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <Cards
          allVideogames={allVideogames}
          lastIndex={lastIndex}
          firstIndex={firstIndex}
        />
      </div>
      {/* <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={totalGames}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
};

export default Home;
