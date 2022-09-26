const jwt = require("jsonwebtoken");
const SchemaUser = require("../../db/SchemaUser");

const editAvatar = async (req, res) => {
  const { token, avatar } = req.body;
  if (token === undefined) {
    return res.send({ code: 400, body: "Not enough arguments" });
  }
  const { TOKEN_KEY } = process.env;
  const { id } = jwt.verify(token, TOKEN_KEY);
  const result = await SchemaUser.findById({ _id: id });

  const total = await SchemaUser.findByIdAndUpdate(result.id, {
    avatar: avatar === "" ? result.avatar : avatar,
  });
  res.status(201);
  res.send(total);
};

module.exports = editAvatar;
