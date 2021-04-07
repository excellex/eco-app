const mongoose = require('mongoose');

module.exports = mongoose.model(
  'User',
  new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  }) )


/*
const mongoose = require('mongoose')

module.exports = mongoose.model(
  'Tare',
  new mongoose.Schema({
    barcode: String,
    material: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
  })
)
*/
