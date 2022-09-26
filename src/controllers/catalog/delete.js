const SchemaCatalog = require("../../db/SchemaCatalog");

const deleteI = async (req, res) => {
  const { id } = req.params;
  const result = await SchemaCatalog.findByIdAndDelete({ _id: id });
  res.status(200);
  res.send(result);
};
module.exports = deleteI;
