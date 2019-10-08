const express = require("express");
const multer = require("multer");
const UploadController = require("../controllers/UploadController");

const uploadConfig = require("../middlewares/upload");
const upload = multer(uploadConfig);

const routes = express.Router();

routes.post("/upload", upload.single("img"), UploadController.store);

module.exports = routes;
