const express = require('express')
const routs = express.Router() 
const authcontroller = require('../controller/authcontroller')

routs.get('/login', authcontroller.login_controller )
routs.post('/login',authcontroller.login_post_controller )
routs.get('/signup', authcontroller.signup_controller)
routs.post('/signup', authcontroller.signup_post_controller)


module.exports = routs