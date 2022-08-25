const { Router } = require("express");
const SchemaCatalog = require("../db/SchemaCatalog");
const router = Router();

router.get("/get", async (req, res) => {
  const catalog = await SchemaCatalog.find();
  res.status(200);
  res.send(catalog);
});
router.get("/getOne/:id", async (req, res) => {
  const { id } = req.params;
  const catalog = await SchemaCatalog.findOne({ _id: id });
  res.status(200);
  res.send(catalog);
});
router.post("/add", async (req, res) => {
  const { title } = req.body;
  const catalogOne = await SchemaCatalog.findOne({ title });
  if (catalogOne) {
    res.status(400);
    return res.send("This name already exists");
  }
  const result = await SchemaCatalog.create(req.body);
  res.status(201);
  res.send(result);
});
router.post("/edit/:id", async (req, res) => {
  const { title, img, room, bed, people, stairs, price, desc } = req.body;
  const { id } = req.params;
  const catalog = await SchemaCatalog.findById({ _id: id });
  const result = await SchemaCatalog.findByIdAndUpdate(
    { _id: id },
    {
      title: title === "" ? catalog.title : title,
      img: img === "" ? catalog.img : img,
      room: room === "" ? catalog.room : room,
      bed: bed === "" ? catalog.bed : bed,
      people: people === "" ? catalog.people : people,
      stairs: stairs === "" ? catalog.stairs : stairs,
      price: price === "" ? catalog.price : price,
      desc: desc === "" ? catalog.desc : desc,
    }
  );
  res.status(201);
  res.send(result);
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await SchemaCatalog.findByIdAndDelete({ _id: id });
  res.status(200);
  res.send(result);
});
module.exports = router;
