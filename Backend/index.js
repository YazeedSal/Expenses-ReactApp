const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ItemsRouter = require("./routes/items.api")

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to database"));
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log("Up and running on port " + PORT);
});

app.use('/item',ItemsRouter)