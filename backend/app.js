const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const budgetRoutes = require('./routes/budgets');
const referenceRoutes = require('./routes/references');

const app = express();

const port = process.env.PORT || 3000;

//db senha: pwoZFgOV28vgnE6U
mongoose
  .connect(
    "mongodb+srv://erickhora:pwoZFgOV28vgnE6U@esatt-db-macdv.mongodb.net/esatt?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Conexão com banco de dados feita com sucesso!");
  })
  .catch(() => {
    console.log("Erro na conxeão com banco de dados");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/quantities", express.static(path.join("backend/quantities")));
app.use("/references", express.static(path.join("backend/references")));
app.use(cors());

app.use("/api/budgets", budgetRoutes);
app.use("/api/references", referenceRoutes);

app.listen(port, () => {
  console.log('Servidor iniciado na porta ' + port);
});

module.exports = app;
