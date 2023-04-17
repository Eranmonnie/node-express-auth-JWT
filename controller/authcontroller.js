const user = require('../models/usermodel')
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
        res.status(201).json(User)
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