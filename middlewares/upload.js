const multer = require("multer");
const puth = require("path");

const tmpDir = puth.join(__dirname, "../", "tmp");

const multerConfig = multer.diskStorage({
    destination: tmpDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: multerConfig
});

module.exports = upload;