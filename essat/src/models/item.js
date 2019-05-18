const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

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
        type: Schema.Types.ObjectId,
        ref: 'Budget',
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Item', ItemSchema);


// UserSchema.pre('save', async function (next) {

// const hash = await bcrypt.hash(this.password, 10);
// this.password = hash;
// next();
// })
