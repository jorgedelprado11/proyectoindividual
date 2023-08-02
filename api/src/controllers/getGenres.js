const { Genres } = require("../db");
const URL = "https://api.rawg.io/api/genres";
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getGenres = async () => {
  const genresApi = await axios(`${URL}?key=${API_KEY}`);

  if (!genresApi) throw Error("no hay genres en la api");
  const genres = await genresApi.data.results.map((genre) => genre.name);

  genres.forEach((name) => Genres.findOrCreate({ where: { name } }));

  //   console.log(genres);

  return await Genres.findAll();
};

module.exports = getGenres;
