const SchemaComment = require("../../db/SchemaComment");

const add = async (req, res) => {
  const { avatar, name, secondname, comment } = req.body;

  if (avatar === undefined) {
    res.status(400);
    res.send("not all fields are filled");
    return;
  } else if (name === undefined) {
    res.status(400);
    res.send("not all fields are filled");
  } else if (secondname === undefined) {
    res.status(400);
    res.send("not all fields are filled");
  } else if (comment === undefined) {
    res.status(400);
    res.send("not all fields are filled");
  }

  const result = await SchemaComment.create(req.body);
  res.status(201);
  res.send(result);
};

module.exports = add;
