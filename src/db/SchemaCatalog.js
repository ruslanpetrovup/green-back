const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const catalogSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  bed: {
    type: String,
    required: true,
  },
  people: {
    type: String,
    required: true,
  },
  stairs: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Catalog = model("catalog", catalogSchema);

module.exports = Catalog;
