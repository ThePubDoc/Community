

function user(req,res){
    res.render("user")
}

function register(req,res){
    res.render("form")
}

module.exports = {
    user : user,
    register : register,
}