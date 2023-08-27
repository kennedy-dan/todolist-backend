const express = require("express");
const router = express.Router();
const { createToDos, updateTodos, deleteTodos } = require("../controllers/list");

router.post("/create", createToDos);
router.put("/update/:todo" ,updateTodos) ;
router.delete("/delete/:todo" ,deleteTodos) ;


module.exports = router;
