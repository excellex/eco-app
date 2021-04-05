const mongoose = require ('mongoose')

module.exports = mongoose.model(

  'Tare',
  new mongoose.Schema({
    barcode: String,
    material: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
  })
)        
