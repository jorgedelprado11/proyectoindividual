// POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).

const postVg = require("../controllers/postVg");

const postVgHandler = async (req, res) => {
  try {
    const { name, description, released, image, rating, plataforms, genres } =
      req.body;
    // console.log(req.body);
    const response = await postVg(
      name,
      description,
      released,
      image,
      rating,
      plataforms,
      genres
    );
    res.status(200).json({ newVideoGame: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = postVgHandler;
