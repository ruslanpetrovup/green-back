const SchemaCatalog = require("../../db/SchemaCatalog");

const add = async (req, res) => {
  const { title } = req.body;
  const catalogOne = await SchemaCatalog.findOne({ title });
  if (catalogOne) {
    res.status(400);
    return res.send("This name already exists");
  }
  const result = await SchemaCatalog.create(req.body);
  res.status(201);
  res.send(result);
};

module.exports = add;
