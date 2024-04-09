const express = require("express");
const {
  handlePost,
  handleDelete,
  handleGet,
  handlePatch,
  handleGetId,
} = require("../controller/Users");

const routes = express.Router();

routes.post("/create", handlePost);

routes.get("/", handleGet);

routes.get("/:id", handleGetId);

routes.patch("/:id", handlePatch);

routes.delete("/:id", handleDelete);

module.exports = routes;
