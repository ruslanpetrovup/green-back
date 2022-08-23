const server = require("./server");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("connect db");
  server.listen(3000, () => {
    console.log("Server start port: 3000");
  });
});
