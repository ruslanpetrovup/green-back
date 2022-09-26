const { Router } = require("express");
const SchemaCallme = require("../db/SchemaCallme");
const router = Router();
const { get, add, deleteI } = require("../controllers/callme");

router.get("/get", get);
router.post("/add", add);
router.delete("/delete/:id", deleteI);

module.exports = router;
