const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../Controllers/TodoController");

const router = Router();

router.get("/get-todo", getToDo);

router.post("/save-todo", saveToDo);

router.delete("/delete-todo/:id", deleteToDo);

router.put("/update-todo", updateToDo);

module.exports = router;