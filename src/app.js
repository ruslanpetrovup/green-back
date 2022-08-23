const server = require("./server");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("connect db");
  server.listen(6000, () => {
    console.log("Server start port: 6000");
  });
});
