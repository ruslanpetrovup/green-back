const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const { user, catalog, verify } = require("./router");
dotenv.config();

app.use(bodyParser.json());

app.use(cors());
app.use(logger);

app.use("/user", user);
app.use("/catalog", catalog);
app.use("/auth", verify);

app.use((req, res) => {
  res.status(404);
  res.send("Not Found");
});

module.exports = app;
