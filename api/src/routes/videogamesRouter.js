const { Router } = require("express");
const getVgByIdHandler = require("../handlers/getVgByIdHandler");
const getVgHandler = require("../handlers/getVgHandler");
const postVgHandler = require("../handlers/postVgHandler");
const videogamesRouter = Router();

videogamesRouter.get("/", getVgHandler);

videogamesRouter.get("/:idVideogame", getVgByIdHandler);

videogamesRouter.get("/");

videogamesRouter.post("/", postVgHandler);

module.exports = videogamesRouter;
