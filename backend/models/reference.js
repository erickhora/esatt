const mongoose = require('mongoose');

const referenceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reference', referenceSchema);
