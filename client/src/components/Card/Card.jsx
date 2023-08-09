import { Link } from "react-router-dom";
import "./Card.css";

//iconos en png
const playStation = "https://img.icons8.com/?size=512&id=12519&format=png";
const pc = "https://img.icons8.com/?size=512&id=9913&format=png";
const android = "https://img.icons8.com/?size=512&id=11138&format=png";
const ios = "https://img.icons8.com/?size=512&id=20828&format=png";
const nintendo = "https://img.icons8.com/?size=512&id=XaIQdSh4y3F9&format=png";
const xbox = "https://img.icons8.com/?size=512&id=12504&format=png";

const Card = ({ videogame }) => {
  const { id, name, image, rating, platforms } = videogame;

  return (
    // <Link to={`/${id}`}>
    <div className="card">
      {/*  */}
      <img className="img" src={image} alt={name} />
      <div className="title-rating">
        <h3>{name}</h3>
        {rating >= 4 ? (
          <h3
            className="rating"
            style={{ border: "2px solid green", color: "green" }}
          >
            {Math.trunc(rating * 20)}
          </h3>
        ) : rating >= 3 ? (
          <h3
            className="rating"
            style={{ border: "2px solid yellow", color: "yellow" }}
          >
            {Math.trunc(rating * 20)}
          </h3>
        ) : (
          <h3
            className="rating"
            style={{ border: "2px solid red", color: "red" }}
          >
            {Math.trunc(rating * 20)}
          </h3>
        )}
      </div>
      <div className="platforms">
        {platforms?.includes("PlayStation") ? (
          <img className="icono" src={playStation} alt="PlayStation" />
        ) : null}
        {platforms?.includes("Xbox") ? (
          <img className="icono" src={xbox} alt="Xbox" />
        ) : null}
        {platforms?.includes("PC") ? (
          <img className="icono" src={pc} alt="PC" />
        ) : null}
        {platforms?.includes("Nintendo") ? (
          <img className="icono" src={nintendo} alt="Nintendo" />
        ) : null}
        {platforms?.includes("Android") ? (
          <img className="icono" src={android} alt="Android" />
        ) : null}
        {platforms?.includes("iOS") ? (
          <img className="icono" src={ios} alt="iOS" />
        ) : null}
      </div>
      {/* <h3 className="platforms">{platforms}</h3> */}
      <Link to={`/${id}`} className="link">
        Ver Más
      </Link>
    </div>
    // </Link>
  );
};

export default Card;
