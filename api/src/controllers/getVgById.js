const URL = "https://api.rawg.io/api/games";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getById = async (idVideogame) => {
  try {
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
