const { Videogame, Genres } = require("../db");
const URL = "https://api.rawg.io/api/games?search=";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Op } = require("sequelize");

const getVgByQuery = async (name) => {
  try {
    const videogamesDbFound = await getVgDbByQuery(name);
    const videogamesApiFound = await getVgApiByQuery(name);

    const videogamesFound = [...videogamesDbFound, ...videogamesApiFound];

    if (!videogamesFound.length)
      throw Error(`No se encontró ningun juego con el nombre ${name}`);

    return videogamesFound;
  } catch (error) {
    throw Error(`No se encontró ningun videojuego con el nombre ${name}`);
  }
};

const getVgDbByQuery = async (name) => {
  const auxVgDb = await Videogame.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: Genres, // Incluimos la relación "Genres" para obtener los géneros asociados a cada videojuego
  });

  const videogamesDbFound = auxVgDb.map((videogame) => {
    return {
      id: videogame.id,
      image: videogame.background_image,
      name: videogame.name,
      rating: videogame.rating,
      platforms: videogame.platforms,
      genres: videogame.Genres.map((genre) => genre.name).join(", "),
      // Accedemos a los géneros directamente desde la relación
    };
  });
  return videogamesDbFound;
};

const getVgApiByQuery = async (name) => {
  // con &page_size=15 me aseguro que solo me devuelva 15 elementos del array.
  const { data } = await axios(`${URL}${name}&key=${API_KEY}&page_size=15`);
  // console.log(data.results);
  const videogamesApiFound = data.results.map((videogame) => {
    return {
      id: videogame.id,
      image: videogame.background_image,
      name: videogame.name,
      rating: videogame.rating,
      platforms: videogame.platforms
        .map((info) => info.platform.name)
        .join(", "),
      genres: videogame.genres.map((genre) => genre.name).join(", "),
    };
  });
  return videogamesApiFound;
};

module.exports = getVgByQuery;
