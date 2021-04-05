const mongoose = require ('mongoose')

module.exports = mongoose.model(

  'Material',
  new mongoose.Schema({
    name: String,
    accept: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
    description: String
  })
)        
