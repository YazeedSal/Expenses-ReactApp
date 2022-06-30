const express = require("express");
const Item = require("../models/items.model");
const router = express.Router();

router.post("/addItem", async function (req, res) {
  const item = new Item(req.body);
  const response = await item.save();
  res.send(response);
});

router.get("/getItems", async function (req, res) {
  const items = await Item.find({});
  res.send(items);
});

module.exports = router;
