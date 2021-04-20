const Place = require('../models/Place')
const Tare = require('../models/Tare')
const Material = require('../models/Material')
const Category = require('../models/Category')


module.exports.findTares = async (req, res) => {
  try {
    const { barcode } = req.body
    const tare = await Tare.findOne({ barcode })
    if (tare) {
      const material = await Material.findOne({ _id: tare.material }).populate('accept')
      return res.status(200).json({
        success: true,
        places: material.accept,
        description: material.description
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'not found'
      })
    }
  } catch (e) {
    res.send({ success: false, message: 'Server error' })
  }
}

module.exports.addTare = async (req, res) => {
  try {
    const { barcode, material, category } = req.body
    const tare = await Tare.findOne({ barcode })
    if (tare) {
      const materialFind = await Material.findOne({ _id: tare.material }).populate('accept')
      return res.status(200).json({
        success: true,
        message: 'a tare is already exists',
        places: materialFind.accept
      })
    } else {
      // const materialCreate = await Material.findOne({ name: material })
      // const categoryCreate = await Category.findOne({ _id: category })
      const newTare = await Tare.create({ barcode, material, category })
      const materialFindAfterCreate = await Material.findOne({ _id: newTare.material }).populate('accept')
      return res.status(200).json({
        success: true,
        message: 'a tare is created',
        places: materialFindAfterCreate.accept
      })
    }
  } catch (e) {
    res.send({ success: false, message: 'Server error' })
  }
}

module.exports.addPlace = async (req, res) => {
  try {
    console.log('"/addplace" req.body', req.body);
    const { geometry, properties, modules, link, materials, categories } = req.body
    const mats = await Material.findOne({ name: materials })
    const cats = await Category.findOne({ name: categories })
    const obj = { geometry, properties, modules, link, materials: [mats._id], categories: [cats._id] }
    const newPlace = await Place.create(obj)
    mats.accept.push(newPlace._id)
    await mats.save()
    return res.status(200).json({ success: true, message: 'New place has been added' })
  } catch (e) {
    res.json({ success: false, message: 'Server error' })
  }
}
