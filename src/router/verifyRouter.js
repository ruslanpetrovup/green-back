const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const SchemaUser = require("../db/SchemaUser");
const { verify } = require("../controllers/user");

router.get("/verify", verify);
module.exports = router;
