const { Router } = require("express");
const path = require("path");
const fs = require("fs");
const router = Router();
const multer = require("multer");
const console = require("console");

const tempDir = path.join(process.cwd(), "src/files/temp");
const photoDir = path.join(process.cwd(), "src/files/photo");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 100000000,
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("avatar"), async (req, res, next) => {
  console.log(req.body);
  const { path: tempName, originalname } = req.file;
  const fileName = path.join(photoDir, originalname);
  try {
    fs.rename(tempName, fileName, () => {
      res.json({
        status: "succsess",
        code: 200,
        data: {
          result: fileName,
        },
      });
    });
  } catch (error) {
    fs.unlink(tempName);
    next(error);
  }
});

module.exports = router;
