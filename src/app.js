const server = require("./server");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("connect db");
  server.listen(process.env.PORT || 5000, () => {
    console.log("Server start port:3000");
  });
});
