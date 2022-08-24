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
    type: Number,
    required: true,
  },
  bed: {
    type: Number,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  stairs: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Catalog = model("catalog", catalogSchema);

module.exports = Catalog;
