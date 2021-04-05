const router = require('express').Router()
const { getPlaces, getTares, getMaterials, getCategories } = require('../controllers')


router.get('/check', async (req, res) => {
  res.send('ok  05.04.2021 16:12')
})

router
  .get('/places', getPlaces)

router
  .get('/tares', getTares)

router
  .get('/materials', getMaterials)

  router
  .get('/categories', getCategories)

module.exports = router

