const express = require('express')

const LaptopCtrl = require('../controllers/laptop-ctrl')

const router = express.Router()

router.post('/laptop', LaptopCtrl.createLaptop)
router.put('/laptop/:id', LaptopCtrl.updateLaptop)
router.delete('/laptop/:id', LaptopCtrl.deleteLaptop)
router.get('/laptop/:id', LaptopCtrl.getLaptopById)
router.get('/laptops1', LaptopCtrl.getLaptops)
router.get('/laptops2', LaptopCtrl.getLaptops)
router.get('/laptops3', LaptopCtrl.getLaptops)
router.get('/laptops4', LaptopCtrl.getLaptops)

module.exports = router