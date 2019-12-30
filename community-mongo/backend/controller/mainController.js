const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;
const mongo = require("../database/mongo")

function user(req,res){

}

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
    // console.log(req.params)
    const {id} = req.params
    // console.log(id)
    User.findOne({
        where: {
            id: id
        }
    })
    .then(user => {
        // console.log("....",user)
        res.render("editUser", {
            user : user,
        })
    })
}

function register(req,res){
    res.render("form")
}

function del(req,res){
    console.log(req.params)
    const {id} = req.params
    User.findOne({
        where: {
            id: id
        }
    })
    .then(user => {
        // console.log("....",user)
        res.render("deleteUser", {
            user : user,
        })
    })
}


module.exports = {
    user : user,
    register : register,
    update : update,
    del : del
}