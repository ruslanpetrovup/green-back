const SchemaCallme = require("../../db/SchemaCallme");

const deleteI = async (req, res) => {
  const { id } = req.params;
  const result = await SchemaCallme.findByIdAndDelete({ _id: id });
  res.status(201);
  res.send(result);
};

module.exports = deleteI;
