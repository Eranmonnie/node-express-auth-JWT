const express = require('express')
const homecontroller = require('../controller/homecontroller')
const {authmiddleware} =  require('../middleware/authmiddleware')
const routs = express.Router()



routs.get('/',homecontroller.home_controller)
routs.get('/fingerprints',authmiddleware, homecontroller.fingerprints)

module.exports = routs