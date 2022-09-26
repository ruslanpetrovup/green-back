const add = async (req, res) => {
  const result = await SchemaCallme.find();
  res.status(200);
  res.send(result);
};

module.exports = add;
