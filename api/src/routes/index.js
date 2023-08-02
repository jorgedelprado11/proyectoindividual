const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const videogamesRouter = require("./videogamesRouter");
const genresRouter = require("./genresRouter");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

module.exports = router;
