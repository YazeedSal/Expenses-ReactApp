const mongoose = require("mongoose");


const Schema = mongoose.Schema

const itemsSchema = new Schema({
  name: String,
  cost: Number,
});

const Item = mongoose.model("item",itemsSchema);

module.exports = Item;
