const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

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
        // we can use regex like so to validate email but well use a third party package 

        validator.isEmail
        , 'please enter a valid email']
    },
    

      'password': {
        type : String, 
        required : [true, 'Please enter password'],
        minlength : [8, 'password must be of length 8 or more'],
    },

})

//actions before or after data has been saved to the db mongoose hooks

user_schema.pre('save', async function(next){
  const salt =  await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

//static method on model for login better to have dedicated functions to handel these tasks 
user_schema.statics.login = async function(username , password){
    
      const User = await this.findOne({"username" : username})

      if (User){
       const auth = await bcrypt.compare(password, User.password)
       if (auth){
        return User
       }
       throw Error('incorrect password')
      }
      throw Error('incorrect username')
}

const user = mongoose.model('user', user_schema)

module.exports = user