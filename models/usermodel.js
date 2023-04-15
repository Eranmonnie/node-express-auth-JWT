const mongoose = require('mongoose')

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
        unique : [true, 'User with this username already exists'],
    },

      "email":{
        type : String, 
        required : [true, 'Please enter email address'],
        unique : [true, 'User with this email already exists'],
        lowercase : true,
        validate : [(val)=>{ 
        //    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))
        // {
        //   return (true)
        // }
        // we can use regex loke so to validate email but well use a third party package 
        
        }
        , 'please enter a valid email']
    },
    

      'password': {
        type : String, 
        required : [true, 'Please enter password'],
        minLength : [8, 'password must be of length 8 or more'],
    },

})

const user = mongoose.model('user', user_schema)

module.exports = user