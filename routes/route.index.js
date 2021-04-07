const router = require('express').Router()
const { getPlaces, getTares, getMaterials, getCategories } = require('../controllers')
const { findTares, addTare, addPlace } = require('../controllers/controller.post')


router.get('/check', async (req, res) => {
  res.send('ok  05.04.2021 16:12')
})

router
  .get('/places', getPlaces)
  .post('/addplace', addPlace)

router
  .get('/tares', getTares)
  .post('/tares', findTares)
  .post('/addtare', addTare)

router
  .get('/materials', getMaterials)

  router
  .get('/categories', getCategories)

module.exports = router

