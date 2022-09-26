const jwt = require("jsonwebtoken");
const SchemaUser = require("../../db/SchemaUser");

const verify = async (req, res, next) => {
  try {
    const { TOKEN_KEY } = process.env;
    const [, token] = req.headers.authorization.split(" ");
    const { id } = jwt.verify(token, TOKEN_KEY);
    const total = await SchemaUser.findById({ _id: id });
    if (total) {
      res.status(200).json({
        status: "success",
        code: 200,
        data: {
          total,
        },
      });

      return;
    }
    res.status(403).json({
      status: "error",
      code: 403,
      message: "Bad requst",
    });
  } catch (error) {
    res.status(403).json({
      status: "error",
      code: 403,
      message: error,
    });
  }
};

module.exports = verify;
