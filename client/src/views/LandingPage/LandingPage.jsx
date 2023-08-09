import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="contenedor">
        <h1>Bienvenido a la SPA de VideoGames</h1>
        <Link to={"/home"}>
          <button className="btn">Ingresar</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
