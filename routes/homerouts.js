const express = require('express')
const homecontroller = require('../controller/homecontroller')
const routs = express.Router()



routs.get('/',homecontroller.home_controller)
routs.get('/fingerprints',homecontroller.fingerprints)

module.exports = routs