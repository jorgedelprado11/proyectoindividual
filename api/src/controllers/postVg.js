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
  try {
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

    // creo el nuevo videojuego
    // hago destructuring del findOrCreate que me devuelve un array con el objeto creado en la primera posicion y un booleando en la segunda 
    // const [newVideogame, setNewVideogame] = await Videogame.findOrCreate({
    //   where: {
    //     name,
    //     description,
    //     released,
    //     image,
    //     rating,
    //     plataforms,
    //   },
    // });
    // if (setNewVideogame) {
    //   // busco el genero en la db y lo seteo en el videojuego nuevo
    //   const newGenres = await Genres.findOne({ where: { name: genres } });
    //   if (!newGenres)
    //     throw Error(`El genero ${genres} no existe en la base de datos`);
    //   await newVideogame.setGenres(newGenres.id);
    // }
    // return newVideogame;

    //puedo hacerlo asi tmb
    const newVideogame = Videogame.build({
      name,
      description,
      released,
      image,
      rating,
      plataforms,
    });
    await newVideogame.save();
    const newGenres = await Genres.findOne({ where: { name: genres } });
    if (!newGenres)
      throw Error(`El genero ${genres} no existe en la base de datos`);
    await newVideogame.setGenres(newGenres.id);
    return newVideogame;
  } catch (error) {
    throw Error("Faltan datos");
  }
};

module.exports = postVg;
