const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const OrcamentoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
    descricao:{
        type: String,
        required: true,
    },
});



// UserSchema.pre('save', async function (next) {

// const hash = await bcrypt.hash(this.password, 10);
// this.password = hash;
// next();
// })

const Orcamento = mongoose.model('Orcamento', OrcamentoSchema);

module.exports = Orcamento;