const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  seconname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const User = model("user", userSchema);

module.exports = User;
