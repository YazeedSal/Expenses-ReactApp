const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ItemsRouter = require("./routes/items.api");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to database"));

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log("Up and running on port " + PORT);
});

app.use("/item", ItemsRouter);
