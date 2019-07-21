const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    passsword: {
      type: String,
      required: true
    },
    budgetsCreated: [String], //Guardar ids dos orçamentos criados
    referencesCreated: [String] //Guardar ids das referências criadas
  }
);

module.exports = mongoose.model('User', userSchema);
