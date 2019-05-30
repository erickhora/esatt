const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

const appRoutes = require('./routes/app');
const authRoutes = require('./routes/auth');

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'budgets');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'xls' || file.mimetype === 'xlsx'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.use(bodyParser.json());
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('budget'));
// app.use('/history', express.static(path.join(__dirname, 'budgets')));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

app.use('/home', appRoutes);
app.use('/auth', authRoutes);


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
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