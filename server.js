const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
require('dotenv').config()



const Place = require('./Place')
const Tare = require('./Tare')
const Material = require('./Material')
const Category = require('./models/Category')

const PORT = process.env.PORT || 8080

const app = express();
app.use(cors())
app.use(express({ urlencoded: true }))
app.use(express.json())

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })



app.get('/places', async (req, res) => {
  const place = await Place.find()
  res.status(200).json(place)
})

app.get('/tares', async (req, res) => {
  const place = await Tare.find()
  res.status(200).json(place)
})

app.get('/materials', async (req, res) => {
  const place = await Material.find()
  res.status(200).json(place)
})

app.get('/categories', async (req, res) => {
  const place = await Category.find()
  res.status(200).json(place)
})

//поиск по штрих-коду и отправка адресов, где принимают
app.post('/tares', async (req, res) => {
  console.log('"/tares" req.body',req.body);
  const { barcode } = req.body
  const tare = await Tare.findOne({ barcode })
  console.log(tare);
  if (tare) {
    const material = await Material.findOne({ _id: tare.material }).populate('accept')
    console.log(material.description);
    res.status(200).json({
      success: true,
      places: material.accept,
      description: material.description
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'not found'
    })
  }
})

//добавление новой тары по штрих-коду, материалу и категории
app.post('/addtare', async (req, res) => {
  console.log('"/addtare" req.body', req.body);
  const { barcode, material, category } = req.body
  const tare = await Tare.findOne({ barcode })
  if (tare) {
    const materialFind = await Material.findOne({ _id: tare.material }).populate('accept')
    res.status(200).json({
      success: true,
      message: 'a tare is already exists',
      places: materialFind.accept
    })
  } else {
    // const materialCreate = await Material.findOne({ name: material })
    // const categoryCreate = await Category.findOne({ _id: category })
    const newTare = await Tare.create({ barcode, material, category })
    const materialFindAfterCreate = await Material.findOne({ _id: newTare.material }).populate('accept')
    console.log(materialFindAfterCreate.accept);
    res.status(200).json({
      success: true,
      message: 'a tare is created',
      places: materialFindAfterCreate.accept
    })

  }
})

//поиск мест по категории и материалу
app.post('/categories', async (req, res) => {
  console.log('"/catecories" req.body', req.body);
  let newArray = []
  const { category, material } = req.body
  const mat = await Material.findOne({ name: material }).populate('accept')

  const cat = await Category.findOne({ name: category });
  newArray = mat && [...mat.accept].filter(el => el.categories.includes(cat && cat._id) || category === 'КАТЕГОРИЯ') //в массив идут только адреса, у которых массив категорий имеет id нужную категорию
  if (!newArray) newArray = []
  console.log(newArray);
  res.status(200).json({
    success: true,
    message: 'it is your places',
    places: newArray
  })
})

app.post('/addplace', async (req, res) => {
  console.log('"/addplace" req.body', req.body);
  const { geometry, properties, modules, link, materials, categories } = req.body
  const mats = await Material.findOne({ name: materials })

  const cats = await Category.findOne({ name: categories })
  const obj = { geometry, properties, modules, link, materials: [mats._id], categories: [cats._id] }
  const newPlace = await Place.create(obj)
  mats.accept.push(newPlace._id)
  await mats.save()
})

app.listen(3002)
