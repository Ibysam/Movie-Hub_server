const express = require("express");
const auth = require("../middlewares/auth");

const methodNotallowed = require("../utils/methodNotAllowed");
const {
  allBookmarks,
  addBookmark,
  removeBookmark,
} = require("../controllers/bookmarkController");

const router = express.Router();

router.route("/bookmark").get(auth, allBookmarks).all(methodNotallowed);

router.route("/add/:id").get(auth, addBookmark).all(methodNotallowed);

router.route("/remove/:id").get(auth, removeBookmark).all(methodNotallowed);

module.exports = router;
