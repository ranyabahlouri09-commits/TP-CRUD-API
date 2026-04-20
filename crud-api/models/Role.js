const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  permissions: Object
});

module.exports = mongoose.model('Role', roleSchema);
