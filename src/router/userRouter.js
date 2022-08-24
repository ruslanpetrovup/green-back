const { Router } = require("express");
const bcrypt = require("bcryptjs");
const SchemaUser = require("../db/SchemaUser");
const jwt = require("jsonwebtoken");
const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await SchemaUser.findOne({ email });
    if (result) {
      if (bcrypt.compareSync(password, result.password)) {
        const payload = {
          id: result._id,
        };
        const token = jwt.sign(payload, process.env.TOKEN_KEY);

        res.status(200).json({
          status: "Singed In",
          code: 200,
          data: {
            token,
          },
        });
        return;
      }
    }
    res.status(400).json({
      status: "Invalid email or password",
      code: 400,
    });
  } catch (err) {
    return err;
  }
});

router.post("/edit-name", async (req, res) => {
  const { token, name, secondname } = req.body;
  if (token === undefined) {
    return res.send({ code: 400, body: "Not enough arguments" });
  }
  const { TOKEN_KEY } = process.env;
  const { id } = jwt.verify(token, TOKEN_KEY);
  const result = await SchemaUser.findById({ _id: id });

  const total = await SchemaUser.findByIdAndUpdate(result.id, {
    name: name === "" ? result.name : name,
    secondname: secondname === "" ? result.secondname : secondname,
  });
  console.dir(name);
  res.status(201);
  res.send(total);
});
router.post("/registration", async (req, res) => {
  const { email, name, secondname, password } = req.body;
  try {
    const check = await SchemaUser.find({ email });
    if (check.length > 0) {
      return res.status(409).json({
        status: "Such mail exists",
        code: 409,
      });
    }
    const result = await SchemaUser.create({
      email: email,
      name: name,
      secondname: secondname,
      password: bcrypt.hashSync(password),
    });
    res.status(201);
    res.send(result);
  } catch (err) {
    return err;
  }
});

router.delete("/delete/:id", async (req, res) => {
  const result = await SchemaUser.findByIdAndDelete(req.params.id);
  res.status(201);
  res.send(result);
});
module.exports = router;
