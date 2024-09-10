const Movie = require("../models/movies");
const customError = require("../utils/customError");

//==========controller to find all the bookmarked movie==============
const allBookmarks = async (req, res) => {
  const { userId } = req.user;
  const bookmarks = await Movie.find({ bookmarkBy: userId });
  res.status(200).json({ data: bookmarks });
};

//====controller to add movie to bookmark=====
const addBookmark = async (req, res) => {
  const { id } = req.params;

  const { userId } = req.user;

  const bookmarkedShows = await Movie.findOneAndUpdate(
    { _id: id },
    { $push: { bookmarkBy: userId } }
  );

  if (!bookmarkedShows) {
    return next(customError(`No Movie with ID: ${id}`, 400));
  }
  res.status(200).json({ message: "Movie BookMarked" });
};

//=====controller to remove a move a movie from bookmarked======
const removeBookmark = async (res, req) => {
  const { id } = req.params;
  const { userId } = req.user;

  const bookmarkedShows = await Movie.findOneAndUpdate(
    { _id: id },
    { $pull: { bookmarkBy: userId } }
  );
  if (!bookmarkedShows) {
    return next(customError(`No Movie with ID: ${id}`, 400));
  }
  res.status(200).json({ message: "Bookmark Removed" });
};

module.exports = { allBookmarks, addBookmark, removeBookmark };
