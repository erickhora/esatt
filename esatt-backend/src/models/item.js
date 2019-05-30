const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    unity:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    reference: {
        type: String,
        required: true,
    },
    budgetId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Budget',
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Item', ItemSchema);