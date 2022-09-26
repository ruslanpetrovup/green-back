const e = require("express");
const SchemaCatalog = require("../../db/SchemaCatalog");
const edit = async (req, res) => {
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
};
module.exports = edit;
