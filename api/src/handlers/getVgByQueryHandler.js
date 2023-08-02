const getVgByQuery = require("../controllers/getVgByQuery");

// GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos

const getVgByQueryHandler = async (req, res) => {
  try {
    const { name } = req.query;
    // console.log(req.query);
    const response = await getVgByQuery(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getVgByQueryHandler;
