const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Budget = require("./models/budget");

const app = express();

//db senha: t8loXPLkeb6aYADG
mongoose
  .connect(
    "mongodb+srv://erickhora:t8loXPLkeb6aYADG@esatt-db-macdv.mongodb.net/esatt?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão com banco de dados feita com sucesso!");
  })
  .catch(() => {
    console.log("Erro na conxeão com banco de dados");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

//GET Todos os orçamentos
app.get("/api/budgets", (req, res, next) => {
  Budget.find().then(documents => {
    res.status(200).json({
      message: "Orçamentos recuperados com sucesso!",
      budgets: documents
    });
  });
});

//POST Um orçamento
app.post("/api/budgets", (req, res, next) => {
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
  });
});

//GET Um orçamento
app.get("/api/budgets/:id", (req, res, next) => {
  Budget.findOne({_id: req.params.id }).then(result => {
    res.status(200).json({
      message: "Orçamento " + result._id + " recuperado com sucesso!",
      budget: result
    });
  });
});

//DELETE Um orçamento
app.delete("/api/budgets/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Orçamento deletado!" });
  });
});

module.exports = app;
