const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");

const allVideogames = [];

const getVg = async () => {
  const videogamesDB = await Videogame.findAll();

  const videogamesApi = await axios(`${URL}?key=${API_KEY}`);

  if (!videogamesApi) throw Error("no hay games en la api");

  await videogamesApi.data.results.map((videogame) => {
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
  return [...videogamesDB, ...allVideogames];
};

module.exports = getVg;
