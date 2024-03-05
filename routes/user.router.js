const express = require("express");
const { signup  , login} = require("../controllers/user.controller");
const verifyuser = require("../middleware/verifyuser");

const router = express.Router();

router.route("/signup").post(verifyuser , signup)

router.route("/login").post(login)


module.exports = router;