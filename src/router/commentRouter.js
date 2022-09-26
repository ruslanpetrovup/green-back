const { Router } = require("express");
const SchemaComment = require("../db/SchemaComment");
const router = Router();
const { get, add, deleteI } = require("../controllers/comment");

router.get("/get", get);

router.post("/add", add);

router.delete("/delete/:id", deleteI);

module.exports = router;
