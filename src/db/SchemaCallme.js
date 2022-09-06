const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const callmeSchema = Schema({
  number: {
    type: String,
    required: true,
  },
});

const Callme = model("callme", callmeSchema);

module.exports = Callme;
