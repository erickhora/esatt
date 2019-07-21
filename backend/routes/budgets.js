const express = require('express');
const multer = require('multer');

const Budget = require("../models/budget");

const router = express.Router();

const MIME_TYPE_MAP = {
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx'
};

const qtyStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if(isValid) {
      error = null;
    }
    cb(error, "../backend/quantities");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + 'QTY' + Date.now() + '.' + ext);
  }
});

//GET Todos os orçamentos
router.get("", (req, res, next) => {
  Budget.find().then(documents => {
    res.status(200).json({
      message: "Orçamentos recuperados com sucesso!",
      budgets: documents
    });
  });
});

//POST Um orçamento
router.post("", multer({storage: qtyStorage}).single("quantity"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const budget = new Budget({
    name: req.body.name,
    description: req.body.description,
    reference: req.body.reference,
    content: url + "/quantities/" + req.file.filename,
    creator: "Erick"
  });
  budget.save().then(createdBudget => {
    res.status(201).json({
      message: "Um novo orçamento foi criado com sucesso.",
      budget: {
        id: createdBudget._id,
        name: createdBudget.name,
        description: createdBudget.description,
        reference: createdBudget.reference,
        content: createdBudget.content,
        creator: createdBudget.creator,
      }
    });
    console.log(createdBudget);
  }).catch(error => {
    console.log(error);
  });
});

//GET Um orçamento
router.get("/:id", (req, res, next) => {
  Budget.findOne({_id: req.params.id }).then(result => {
    //transformar quantitativos em JSON;
    //cruzar com tabela de referência escolhida
    res.status(200).json({
      message: "Orçamento " + result._id + " recuperado com sucesso!",
      budget: {
        id: result._id,
        name: result.name,
        description: result.description,
        reference: result.reference,
        content: result.content,
        creator: result.creator,
      }
    });
  });
});

//DELETE Um orçamento
router.delete("/:id", (req, res, next) => {
  Budget.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Orçamento deletado!" });
  });
});

module.exports = router;
