const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");

const getVg = async () => {
  const videogamesDB = await Videogame.findAll();
  
  let allVideogames = [];
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

  return [...videogamesDB, ...allVideogames];
};

module.exports = getVg;
