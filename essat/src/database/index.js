const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/essat', {});
mongoose.Promise = global.Promise;
module.exports = mongoose;