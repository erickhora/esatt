const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
    unidade:{
        type: String,
        required: true,
    },
    quantidade:{
        type: Number,
        required:true,
    },
    preco:{
        type: Number,
        required:true,
    },
    referencia: {
        type: String,
        required: true,
    },
    orcamento:{
        type:String,
        required:true,
    }
});



// UserSchema.pre('save', async function (next) {

// const hash = await bcrypt.hash(this.password, 10);
// this.password = hash;
// next();
// })

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;