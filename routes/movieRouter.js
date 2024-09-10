const express = require("express");
const {
  allShows,
  allSeries,
  allMovies,
} = require("../controllers/movieController");
const methodNotallowed = require("../utils/methodNotAllowed");

const router = express.Router();

router.route("/").get(allShows).all(methodNotallowed);
router.route("/series").get(allSeries).all(methodNotallowed);
router.route("/movies").get(allMovies).all(methodNotallowed);

module.exports = router;
