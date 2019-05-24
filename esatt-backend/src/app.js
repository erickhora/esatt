const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

//Senha DB: l334zIxZohD9X5bJ
mongoose
    .connect(
        'mongodb+srv://Erick:l334zIxZohD9X5bJ@esatt-db-test-hpd0t.mongodb.net/esatt?retryWrites=true'
    )
    .then(result => {
        app.listen(process.env.PORT || 3000);
    })
    .catch(error => {
        console.log(error);
    });