const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;
const mongoose = require("mongoose")
const users = require("../database/mongo")

function user(req,res){
    users.find()
        .exec()
        .then(users => {
            // console.log(users)
            res.render("user" , {
                users : users
            })
        })
        .catch(err => {
            console.log("error in finding all users", err)
        })
}

function update(req,res){
    const id = req.params.id
    users.findById(id)
        .exec()
        .then(user => {
            console.log(user)
            res.render("editUser" , {
                user : user
            })
        })
        .catch(err => {
            console.log("error in update" , err)
        })
}


function register(req,res){
    res.render("form")
}

function del(req,res){
    console.log(req.params)
    const {id} = req.params
    users.findById(id)
        .exec()
        .then(user => {
            console.log(user)
            res.render("deleteUser",{
                user : user
            })
        })
        .catch(err => {
            console.log("error in removing", err)
        })
}


module.exports = {
    user : user,
    register : register,
    update : update,
    del : del
}