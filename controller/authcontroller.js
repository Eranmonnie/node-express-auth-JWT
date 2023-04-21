const user = require('../models/usermodel')
const jwt = require('jsonwebtoken')

const handeler = (err)=>{
    let errors = {
    "firstname":"",
    "last name":"",
    "username":"",
    "email":"",
    "password":"",
    }

//duplicate value in db for unique keys
if (err.code === 11000){
    if (err.message.includes('username_1')){
        errors.username = 'username is already being used'
    }

    else if(err.message.includes('email_1')) {
        errors.email = 'email is already being used'
    }

    return errors
}

    if (err.message.includes('user validation failed')){

    Object.values(err.errors).forEach((error)=>{
        errors[error.properties.path] = error.properties.message
    })

    return errors
}
}
const maxage = 3 * 60 * 60 * 24
const createtoken = (id)=>{
    return jwt.sign({id}, 'ajala feranmis website', {
        expiresIn: maxage,
    })
}

const login_controller = (req, res)=>{
res.render('login')
}

const login_post_controller = (req, res)=>{
    const {email, password} = req.body
    console.log(email, password)
}

const signup_controller = (req, res)=>{
    res.render('signup')
}
 //we find out new ways of doing things 
const signup_post_controller = async (req, res)=>{
    try{
        const User =  await user.create(req.body)

        const token =  createtoken(User._id)

        res.cookie('newuser', token, {
            httponly : true,
            maxage: maxage * 1000,
        })
        
        res.status(201).json({user : User._id})
    }
    catch(err){
       const error = handeler(err)
        res.status(400).json({error})
    }
}

module.exports = {
    login_controller,
    login_post_controller,
    signup_controller,
    signup_post_controller,
}