const { Videogame } = require("../db");

const postVg = async (
  name,
  description,
  released,
  image,
  rating,
  plataforms
) => {
  if (!name || !description || !released || !image || !rating || !plataforms)
    throw Error("Falta datos por completar");

  const newVideogame = await Videogame.findOrCreate({
    where: { name, description, released, image, rating, plataforms },
  });
  return newVideogame;
};

module.exports = postVg;
