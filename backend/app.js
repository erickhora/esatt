const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Budget = require('./models/budget');

const app = express();

//db senha: t8loXPLkeb6aYADG
mongoose.connect("mongodb+srv://erickhora:t8loXPLkeb6aYADG@esatt-db-macdv.mongodb.net/esatt?retryWrites=true&w=majority")
  .then(() => {
    console.log('Conexão com banco de dados feita com sucesso!');
  })
  .catch(() => {
    console.log('Erro na conxeão com banco de dados');
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

app.post("/api/budgets", (req, res, next) => {
  const budget = new Budget({
    name: req.body.name,
    description: req.body.description,
    reference: req.body.reference,
    content: null,
    creator: 'Erick'
  });
  budget.save();
  res.status(201).json({
    message: 'Um novo orçamento foi criado com sucesso.'
  });
});

app.get("/api/budgets", (req, res, next) => {
  Budget.find()
    .then(documents => {
      res.status(200).json({
        message: "Posts fetched succesfully!",
        budgets: documents
      });
    });
});

module.exports = app;
