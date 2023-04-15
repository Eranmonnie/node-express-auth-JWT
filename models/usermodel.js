const mongoose = require('mongoose')

const schema  = mongoose.Schema

const user_schema = new schema({

      "firstname":{
            type : String, 
            required : true
    },

      "last name":{
        type : String, 
        required : true
    },

      "username":{
        type : String, 
        required : true,
        unique : true,
    },

      "email":{
        type : String, 
        required : true,
        unique : true,
        lowercase : true
    },
    

      'password': {
        type : String, 
        required : true,
        unique : true,
        minLength : 8,
    },

})

const user = mongoose.model('user', user_schema)

module.exports = user