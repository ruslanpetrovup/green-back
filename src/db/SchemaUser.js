const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  secondname: {
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
