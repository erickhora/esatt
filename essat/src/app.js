const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);

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