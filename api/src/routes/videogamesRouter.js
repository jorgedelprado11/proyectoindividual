const { Router } = require("express");
const getVgByIdHandler = require("../handlers/getVgByIdHandler");
const getVgHandler = require("../handlers/getVgHandler");
const postVgHandler = require("../handlers/postVgHandler");
const getVgByQueryHandler = require("../handlers/getVgByQueryHandler");
const videogamesRouter = Router();

videogamesRouter.get("/", getVgHandler);

videogamesRouter.get("/name", getVgByQueryHandler);

videogamesRouter.get("/:idVideogame", getVgByIdHandler);

videogamesRouter.post("/", postVgHandler);

module.exports = videogamesRouter;
