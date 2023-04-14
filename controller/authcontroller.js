


const login_controller = (req, res)=>{
res.render('login')
}

const login_post_controller = (req, res)=>{
    res.redirect('/')
}

const signup_controller = (req, res)=>{
    res.render('signup')
}

const signup_post_controller = (req, res)=>{
    res.redirect('/')
}

module.exports = {
    login_controller,
    login_post_controller,
    signup_controller,
    signup_post_controller,
}