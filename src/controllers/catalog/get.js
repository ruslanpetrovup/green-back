const SchemaCatalog = require("../../db/SchemaCatalog");
const get = async (req, res) => {
  const catalog = await SchemaCatalog.find();
  res.status(200);
  res.send(catalog);
};

module.exports = get;
