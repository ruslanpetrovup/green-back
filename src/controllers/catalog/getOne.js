const SchemaCatalog = require("../../db/SchemaCatalog");

const getOne = async (req, res) => {
  const { id } = req.params;
  const catalog = await SchemaCatalog.findOne({ _id: id });
  res.status(200);
  res.send(catalog);
};

module.exports = getOne;
