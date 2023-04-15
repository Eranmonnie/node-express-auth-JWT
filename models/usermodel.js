const mongoose = require('mongoose')
const validator = require('validator')

const schema  = mongoose.Schema

const user_schema = new schema({

      "firstname":{
        type : String, 
        required : [true, 'Please enter First name']
    },

      "last name":{
        type : String, 
        required : [true, 'Please enter Last name'],
    },

      "username":{
        type : String, 
        required : [true, 'Please enter Username name'],
        unique : true,
    },

      "email":{
        type : String, 
        required : [true, 'Please enter email address'],
        unique : true, 
        lowercase : true,
         validate :[
         //(val)=>{ 
        //    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))
        // {
        //   return (true)
        // }
        // we can use regex loke so to validate email but well use a third party package 

        validator.isEmail
        , 'please enter a valid email']
    },
    

      'password': {
        type : String, 
        required : [true, 'Please enter password'],
        minlength : [8, 'password must be of length 8 or more'],
    },

})

const user = mongoose.model('user', user_schema)

module.exports = user