

const home_controller =  (req, res)=>{
    res.render('home')
}

const fingerprints = (req, res)=>{
    res.render('list')
}

module.exports = {
    home_controller,
    fingerprints,
}