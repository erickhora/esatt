const mongoose = require("mongoose");

const Budget = require("./budget");
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    budgets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Budget"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// UserSchema.pre('save', async function (next) {

// const hash = await bcrypt.hash(this.password, 10);
// this.password = hash;
// next();
// })
