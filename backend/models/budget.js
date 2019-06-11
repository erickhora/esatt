const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    reference: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    creator: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Budget', budgetSchema);
