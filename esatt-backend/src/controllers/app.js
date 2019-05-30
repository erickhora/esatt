//GET Budgets / home and history, POST Budget, GET Budget
const Budget = require("../models/budget");
const User = require('../models/user');

//GET Budgets
exports.getBudgets = (req, res, next) => {
  Budget.find()
    .then(budgets => {
      res.status(200).json({ message: 'Orçamentos recuperados com sucesso!', budgets: budgets });
    })
    .catch(error => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.postBudget = async (req, res, next) => {
  if(!req.file) {
    const error = new Error('Nenhum orçamento enviado.');
    error.statusCode = 422;
    throw error;
  }
  const projectName = req.body.projectName;
  const projectDescription = req.body.projectDescription;
  const projectReference = req.body.projectReference;

  const budget = new Budget({
    name: projectName,
    description: projectDescription,
    reference: projectReference,
    content: {},
    creator: req.userId
  });
  budget
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      creator = user;
      user.budgets.push(budget);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: "Orçamento criado com sucesso!",
        budget: budget,
        creator: { _id: creator._id, name: creator.name }
      });
    })
    .catch(error => {
      console.log(error);
    });
};

exports.getBudget = (req, res, next) => {
  const budgetId = req.params.budgetId;
  Budget.findById(budgetId)
    .then(budget => {
      if (!budget) {
        const error = new Error("Orçamento não encontrado");
        error.statusCode = 404;
        throw error;
      }
      res
        .status(200)
        .json({ message: "Orçamento encontrado!", budget: budget });
    })
    .catch(error => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
  res.status(201).json();
};
