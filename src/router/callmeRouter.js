const { Router } = require("express");
const mongoose = require("mongoose");
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

  res.status(201);
  res.send(result);
});

module.exports = router;
