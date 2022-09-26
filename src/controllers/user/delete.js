const SchemaUser = require("../../db/SchemaUser");

const deleteI = async (req, res) => {
  const result = await SchemaUser.findByIdAndDelete(req.params.id);
  res.status(201);
  res.send(result);
};

module.exports = deleteI;
