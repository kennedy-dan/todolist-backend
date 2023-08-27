const express = require("express");
const router = express.Router();
const { createToDos, updateTodos, deleteTodos, getTodos } = require("../controllers/list");

router.post("/create", createToDos);
router.get("/todo", getTodos);
router.put("/update/:todo" ,updateTodos) ;
router.delete("/delete/:todo" ,deleteTodos) ;


module.exports = router;
