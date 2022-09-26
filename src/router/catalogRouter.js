const { Router } = require("express");
const SchemaCatalog = require("../db/SchemaCatalog");
const router = Router();
const { get, getOne, add, edit, deleteI } = require("../controllers/catalog");

router.get("/get", get);
router.get("/getOne/:id", getOne);
router.post("/add", add);
router.post("/edit/:id", edit);
router.delete("/delete/:id", deleteI);

module.exports = router;
