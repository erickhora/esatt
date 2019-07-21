const express = require('express');
const multer = require('multer');

const Budget = require("../models/budget");

const router = express.Router();

const MIME_TYPE_MAP = {
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if(isValid) {
      error = null;
    }
    cb(error, "backend/quantities");
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
router.post("", multer({storage: storage}).single("quantity"), (req, res, next) => {
  const budget = new Budget({
    name: req.body.name,
    description: req.body.description,
    reference: req.body.reference,
    content: null,
    creator: "Erick"
  });
  budget.save().then(createdBudget => {
    res.status(201).json({
      message: "Um novo orçamento foi criado com sucesso.",
      budgetId: createdBudget._id
    });
    console.log(createdBudget);
  }).catch(error => {
    console.log(error);
  });
});

//GET Um orçamento
router.get("/:id", (req, res, next) => {
  Budget.findOne({_id: req.params.id }).then(result => {
    res.status(200).json({
      message: "Orçamento " + result._id + " recuperado com sucesso!",
      budget: result
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
