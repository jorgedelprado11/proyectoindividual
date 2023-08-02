const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");

const getById = async (idVideogame) => {
  try {
    //esto va primero, xq si existe el id en la db no tiene que entrar a la api a buscar, si no existe en la db, busca en la api, si no existe en la api -> throw error
    if (idVideogame.includes("-")) {
      const videogame = await Videogame.findByPk(idVideogame);
      if (videogame) {
        return videogame;
      }
    }

    const { data } = await axios(`${URL}/${idVideogame}?key=${API_KEY}`);

    if (
      data.name === undefined ||
      data.description === undefined ||
      data.platforms === undefined ||
      data.rating === undefined
    )
      throw Error(`Faltan datos del juego con ID: ${idVideogame}`);

    const videogame = {
      id: data.id,
      name: data.name,
      description: data.description,
      rating: data.rating,
      platforms: data.platforms.map((info) => info.platform.name).join(", "),
    };
    return videogame;
  } catch (error) {
    throw Error(`No existe el juego con ID: ${idVideogame}`);
  }
};

module.exports = getById;
