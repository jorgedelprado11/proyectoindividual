const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genres } = require("../db");

const getVg = async () => {
  let allVideogames = [];

  const videogamesDB = await Videogame.findAll({ include: Genres });

  videogamesDB.map((videogameDB) => {
    allVideogames.push({
      id: videogameDB.id,
      name: videogameDB.name,
      image: videogameDB.image,
      rating: videogameDB.rating,
      genres: videogameDB.Genres.map((genre) => genre.name).join(", "),
      platforms: videogameDB.platforms,
    });
  });

  for (let i = 1; i < 6; i++) {
    const { data } = await axios(`${URL}?key=${API_KEY}&page=${i}`);

    if (!data) throw Error("no hay games en la api");

    await data.results.map((videogame) => {
      allVideogames.push({
        id: videogame.id,
        name: videogame.name,
        image: videogame.background_image,
        genres: videogame.genres.map((genre) => genre.name).join(", "), //convierte el array que crea el map a string separado por coma y un espacio
        released: videogame.released,
        rating: videogame.rating,
        platforms: videogame.platforms
          .map((info) => info.platform.name)
          .join(", "),
      });
    });
  }

  return allVideogames;
};

module.exports = getVg;
