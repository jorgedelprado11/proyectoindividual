import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="contenedor">
        <h1>Welcome to the Videogames App</h1>
        <Link to={"/home"}>
          <button className="btn">Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
