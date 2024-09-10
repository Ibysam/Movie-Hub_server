// import dotenv package and config it
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Import route to app.js from authRouter in route folder
const authRouter = require("./routes/authRouter");
const movieRouter = require("./routes/movieRouter");
const bookmarkRouter = require("./routes/bookmarkRouter");

// imported error file from middleware
const error = require("./middlewares/error");

// Spin up a new express application
const app = express();

const port = 4000;

app.use(cors());
// A middleware that allow access to the request.body on all request (without this you can't test on postman)
app.use(express.json());

// Middleware for login and register authentication router
app.use("/api/auth", authRouter);

// Middleware for movie router
app.use("/api/movie", movieRouter);

app.use("/api/bookmark", bookmarkRouter);

//Custom middleware for errors
app.use(error);
// start listening on a given port and run the callback function when it does
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Data base Connected");
    await app.listen(port, () => {
      console.log(`Server is running on PORT ${port} `);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

//ibikunlesamod
//SZ3zKFOpWBIUZaID
//mongodb+srv://ibikunlesamod:SZ3zKFOpWBIUZaID@cluster0.z79vh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
