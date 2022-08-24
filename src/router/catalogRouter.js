const { Router } = require("express");
const SchemaCatalog = require("../db/SchemaCatalog");
const router = Router();

router.get("/get", async (req, res) => {
  const catalog = await SchemaCatalog.find();
  res.status(200);
  res.send(catalog);
});
router.get("/getOne/:id", async (req, res) => {
  const { id } = req.params;
  const catalog = await SchemaCatalog.findOne({ _id: id });
  res.status(200);
  res.send(catalog);
});
router.post("/add", async (req, res) => {
  const { title } = req.body;
  const catalogOne = await SchemaCatalog.findOne({ title });
  if (catalogOne) {
    res.status(400);
    return res.send("This name already exists");
  }
  const result = await SchemaCatalog.create(req.body);
  res.status(201);
  res.send(result);
});
module.exports = router;
