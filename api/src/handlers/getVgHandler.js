const getVg = require("../controllers/getVg");
// GET | /videogames
// Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

const getVgHandler = async (req, res) => {
  try {
    const response = await getVg();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getVgHandler;
