const jwt = require("jsonwebtoken");
const SchemaUser = require("../../db/SchemaUser");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
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
    res.status(400).json({
      status: "Invalid email or password",
      code: 400,
    });
  }
};
module.exports = login;
