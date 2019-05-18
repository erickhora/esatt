const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const budgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    content: {
        items: [{
            itemId: { type: Schema.Types.ObjectId, ref: 'Item' ,required: true},
        }]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Budget', budgetSchema);;



// UserSchema.pre('save', async function (next) {

// const hash = await bcrypt.hash(this.password, 10);
// this.password = hash;
// next();
// })