const SchemaComment = require("../../db/SchemaComment");

const deleteI = async (req, res) => {
  const { id } = req.params;

  const result = await SchemaComment.findByIdAndDelete(id);

  res.status(200);
  res.send(result);
};

module.exports = deleteI;
