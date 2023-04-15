const user = require('../models/usermodel')


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
        console.log (err)
        res.status(400).send('error user not created')
    }
}

module.exports = {
    login_controller,
    login_post_controller,
    signup_controller,
    signup_post_controller,
}