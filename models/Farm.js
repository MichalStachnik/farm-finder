const mongoose = require('mongoose');

const FarmSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

module.exports = mongoose.model('farm', FarmSchema);
