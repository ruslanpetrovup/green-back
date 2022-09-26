const SchemaComment = require("../../db/SchemaComment");

const get = async (req, res) => {
  const result = await SchemaComment.find();
  res.status(200);
  res.send(result);
};

module.exports = get;
