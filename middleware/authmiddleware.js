const jwt = require('jsonwebtoken')

const authmiddleware = (req, res, next)=>{

    token  = req.cookies.newuser
    //check if  token exists 
    if (token ){
        //verify token 
        jwt.verify(token, 'ajala feranmis website', (err, decodedToken)=>{
            if (err){
                console.log(err.message)
                res.redirect('/login')
            }
            else{
                console.log(decodedToken)
                next()
            }
        })

    }
    else{
        res.redirect('/login')
    }
}

module.exports={
    authmiddleware,
}