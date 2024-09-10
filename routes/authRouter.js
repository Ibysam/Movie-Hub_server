const express = require("express");
const { register, login, getUser } = require("../controllers/authController");
const methodNotallowed = require("../utils/methodNotAllowed");
const auth = require("../middlewares/auth");

const router = express.Router();

//router.post("/register", register);

router.route("/register").post(register).all(methodNotallowed);

//====================================

//router.post("/login", login);
router.route("/login").post(login).all(methodNotallowed);

//====================================

router.route("/user").post(auth, getUser).all(methodNotallowed);

module.exports = router;
