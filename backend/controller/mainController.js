const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;

function user(req,res){
    User.findAll()
    .then(users => {
        // console.log(users)
        res.render("user", { 
            users : users,
        })
    })
}

function update(req,res){
    res.render("form")
}

function register(req,res){
    res.render("form")
}

module.exports = {
    user : user,
    register : register,
    update : update,
}