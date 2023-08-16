const { Videogame, Genres } = require("../db");

const postVg = async (
  name,
  description,
  released,
  image,
  rating,
  platforms,
  genres
) => {
  try {
    if (
      !name ||
      !description ||
      !released ||
      !image ||
      !rating ||
      !platforms ||
      !genres.length
    )
      throw Error("Faltan datos por completar");
    //valido que el nombre no este en uso
    const findVideogame = await Videogame.findAll({ where: { name: name } });
    if (findVideogame.length) throw Error("El nombre ya esta en uso");

    // creo el nuevo videojuego
    // hago destructuring del findOrCreate que me devuelve un array con el objeto creado en la primera posicion y un booleando en la segunda
    const [newVideogame, validation] = await Videogame.findOrCreate({
      where: {
        name,
        description,
        released,
        image,
        rating,
        platforms,
      },
    });
    if (validation) {
      // console.log(genres);
      for (let i = 0; i < genres.length; i++) {
        // console.log(genres[i]);
        let newGenres = await Genres.findOne({ where: { name: genres[i] } });
        console.log(newGenres);
        if (!newGenres)
          throw Error(`El genero ${i} no existe en la base de datos`);
        const validator = await newVideogame.addGenres(newGenres.id);
        console.log(validator);
      }
      // busco el genero en la db y lo seteo en el videojuego nuevo
    }
    return newVideogame;

    //puedo hacerlo asi tmb
    // const newVideogame = Videogame.build({
    //   name,
    //   description,
    //   released,
    //   image,
    //   rating,
    //   platforms,
    // });
    // await newVideogame.save();
    // const newGenres = await Genres.findOne({ where: { name: genres } });
    // if (!newGenres)
    //   throw Error(`El genero ${genres} no existe en la base de datos`);
    // await newVideogame.setGenres(newGenres.id);
    // return newVideogame;
  } catch (error) {
    throw Error("Faltan datos");
  }
};

module.exports = postVg;
