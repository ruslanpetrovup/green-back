const user = require("./userRouter");
const catalog = require("./catalogRouter");
const verify = require("./verifyRouter");
const comment = require("./commentRouter");
const callme = require("./callmeRouter");

module.exports = {
  user,
  catalog,
  comment,
  verify,
  callme,
};
