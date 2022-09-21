const { ObjectID } = require("bson");
const { Router } = require("express");
const SchemaCallme = require("../db/SchemaCallme");
const router = Router();

router.get("/get", async (req, res) => {
  const result = await SchemaCallme.find();
  res.status(200);
  res.send(result);
});

router.post("/add", async (req, res) => {
  const { number } = req.body;
  const result = await SchemaCallme.create({ number });
  setTimeout(() => {
    SchemaCallme.findByIdAndDelete({ _id: result._id.toString() });
    console.log(result._id.toString());
  }, 15000);
  res.status(201);
  res.send(result);
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await SchemaCallme.findByIdAndDelete({ _id: id });
  res.status(201);
  res.send(result);
});
module.exports = router;
