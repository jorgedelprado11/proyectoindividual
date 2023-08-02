const { Videogame } = require("../db");

// GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos
const getVgByQuery = async (req, res) => {

    
};

module.exports = getVgByQuery;
