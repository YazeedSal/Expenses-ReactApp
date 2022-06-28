import mongoose, { model, Schema } from "mongoose";

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  name: String,
  cost: Number,
});

const Item = mongoose.model("item");

module.exports = Item;
