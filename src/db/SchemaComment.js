const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = Schema({
  avatar: {
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
  comment: {
    type: String,
    required: true,
  },
});

const Comments = model("comment", commentSchema);

module.exports = Comments;
