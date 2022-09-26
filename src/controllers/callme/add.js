const SchemaCallme = require("../../db/SchemaCallme");
const add = async (req, res) => {
  const { number } = req.body;
  const result = await SchemaCallme.create({ number });
  setTimeout(() => {
    SchemaCallme.findByIdAndDelete({ _id: result._id.toString() });
    console.log(result._id.toString());
  }, 15000);
  res.status(201);
  res.send(result);
};

module.exports = add;
