const mongoose = require ('mongoose')

module.exports = mongoose.model(

  'Place',
  new mongoose.Schema({
    geometry: [Number],
    properties: {
      hintContent: String,
      balloonContent: String
    },
    modules: [String],
    link: String,
    materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }], 
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], 
     
  })
)                                                                                                                                                                                                                                                                           



