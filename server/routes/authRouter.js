const Router = require("express");
const express = require("express");
const jsonParser = express.json();
const router = new Router();

const authController = require("../controllers/authController");

router.post("", jsonParser, authController.auth);

module.exports = router;
