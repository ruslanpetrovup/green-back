const jwt = require("jsonwebtoken");
const SchemaUser = require("../../db/SchemaUser");
const bcrypt = require("bcryptjs");

const registration = async (req, res) => {
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
      avatar: "https://i.ibb.co/1GkCkN2/avatar.jpg",
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
};

module.exports = registration;
