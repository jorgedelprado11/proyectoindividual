const getById = require("../controllers/getVgById");

// GET | //:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
// El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
const getVgByIdHandler = async (req, res) => {
  try {
    const { idVideogame } = req.params;

    const response = await getById(idVideogame);

    res.status(200).json(response);
  } catch (error) {
    console.log("error >>>>", error.message);
    res.status(400).send(error.message);
  }
};

module.exports = getVgByIdHandler;
