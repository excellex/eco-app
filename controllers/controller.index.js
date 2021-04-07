const Place = require('../models/Place')
const Tare = require('../models/Tare')
const Material = require('../models/Material')
const Category = require('../models/Category')

module.exports.getPlaces = async (req, res) => {
  try {
    const place = await Place.find()
    res.status(200).json(place)
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}

module.exports.getTares = async (req, res) => {
  try {
    const tare = await Tare.find()
    res.status(200).json(tare)
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}

module.exports.getMaterials = async (req, res) => {
  try {
    const material = await Material.find()
    res.status(200).json(material)
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}

module.exports.getCategories = async (req, res) => {
  try {
    const category = await Category.find()
    res.status(200).json(category)
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}
