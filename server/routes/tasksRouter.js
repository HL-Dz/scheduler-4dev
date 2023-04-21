const Router = require("express");
const express = require("express");
const jsonParser = express.json();
const router = new Router();

const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getAllTasks);
router.post("/", jsonParser, tasksController.createTask);
router.put("/", jsonParser, tasksController.updateTask);
router.delete("/:id", jsonParser, tasksController.deleteTask);

module.exports = router;
