const Router = require("express");
const router = new Router();

const tasksRouter = require("./tasksRouter");
const authRouter = require("./authRouter");

router.use("/auth", authRouter);
router.use("/tasks", tasksRouter);

module.exports = router;
