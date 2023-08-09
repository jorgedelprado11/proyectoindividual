import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ allVideogames, lastIndex, firstIndex }) => {
  return (
    <div className="cards-list">
      {allVideogames
        ?.map((videogame) => <Card key={videogame.id} videogame={videogame} />)
        .slice(firstIndex, lastIndex)}
    </div>
  );
};

export default Cards;
