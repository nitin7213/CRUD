const express = require("express");
const {
  handlePost,
  handleDelete,
  handleGet,
  handlePatch,
  handleGetId,
} = require("../controller/Users");

const router = express.Router();

router.post("/create", handlePost);

router.get("/", handleGet);

router.get("/:id", handleGetId);

router.patch("/:id", handlePatch);

router.delete("/:id", handleDelete);

module.exports = router;
