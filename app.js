const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const homerouts = require('./routes/homerouts')
const app = express()

const dbURI = 'mongodb+srv://ajala:test@first-cloud-database.iga54vy.mongodb.net/auth_db?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(result=>app.listen(3000)) // listen for request at port 3000
.catch((err)=>console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


//autentication 

//home
app.use(homerouts)