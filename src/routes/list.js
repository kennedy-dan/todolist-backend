const express = require("express");
const router = express.Router();
const { createToDos } = require("../controllers/list");

router.post("/create", createToDos);


module.exports = router;
