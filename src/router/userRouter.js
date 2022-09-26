const { Router } = require("express");
const router = Router();

const {
  login,
  registration,
  editName,
  editAvatar,
  deleteI,
} = require("../controllers/user");

router.post("/login", login);

router.post("/edit-name", editName);

router.post("/edit-avatar", editAvatar);

router.post("/registration", registration);

router.delete("/delete/:id", deleteI);
module.exports = router;
