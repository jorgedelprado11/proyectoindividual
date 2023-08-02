const { Videogame, Genres } = require("../db");

const postVg = async (
  name,
  description,
  released,
  image,
  rating,
  plataforms,
  genres
) => {
  if (
    !name ||
    !description ||
    !released ||
    !image ||
    !rating ||
    !plataforms ||
    !genres
  )
    throw Error("Faltan datos por completar");
  //valido que el nombre no este en uso
  const findVideogame = await Videogame.findAll({ where: { name: name } });
  if (findVideogame.length) throw Error("El nombre ya esta en uso");

  //creo el nuevo videojuego
  const newVideogame = await Videogame.findOrCreate({
    where: { name, description, released, image, rating, plataforms },
  });

  //busco el genero en la db
  const newGenres = await Genres.findAll({ where: { name: genres } });
  //despues veo como sigo acá 
  return newVideogame;
};

module.exports = postVg;
