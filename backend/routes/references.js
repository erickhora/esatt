const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');

const Reference = require("../models/reference");

const router = express.Router();

const MIME_TYPE_MAP = {
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx'
};

const refStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if(isValid) {
      error = null;
    }
    cb(error, "../backend/references");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + 'REF' + Date.now() + '.' + ext);
  }
});

router.post("", multer({ storage: refStorage }).single("reference"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const reference = new Reference({
    name: req.body.name,
    content: url + "/references/" + req.file.filename,
    creator: "Erick"
  });
  reference.save()
    .then((createdReference) => {
      res.status(201).json({
        message: "A sua referência foi criada com sucesso",
        reference: {
          id: createdReference._id,
          name: createdReference.name,
          content: createdReference.content,
          creator: "Erick"
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
