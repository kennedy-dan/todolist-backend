const express = require("express");
const router = express.Router();
const { createToDos, updateTodos } = require("../controllers/list");

router.post("/create", createToDos);
router.put("/update/:todo" ,updateTodos) ;


module.exports = router;
