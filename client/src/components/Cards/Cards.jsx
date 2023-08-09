import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ allVideogames }) => {
  return (
    <div className="cards-list">
      {allVideogames?.map((videogame) => (
        <Card key={videogame.id} videogame={videogame} />
      ))}
    </div>
  );
};

export default Cards;
