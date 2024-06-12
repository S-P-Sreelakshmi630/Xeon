const mongoose = require('mongoose');

const UserTransactionSchema = new mongoose.Schema({
  accessToken: { type: String, required: true },
  accounts: { type: Array, required: true },
  added: { type: Array, required: true },
  modified: { type: Array, required: true },
  removed: { type: Array, required: true },
});

const UserTransaction = mongoose.model('UserTransaction', UserTransactionSchema);

module.exports = UserTransaction;
