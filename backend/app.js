const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const budgetRoutes = require('./routes/budgets');

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
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/api/budgets", budgetRoutes);

app.listen(port, () => {
  console.log('Servidor iniciado na porta ' + port);
});

module.exports = app;
