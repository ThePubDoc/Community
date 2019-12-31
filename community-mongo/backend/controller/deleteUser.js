const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;
const mongoose = require("mongoose")
const users = require("../database/mongo")


function del(req,res){
    const {id} = req.body

    users.remove({ _id : id})
        .exec()
        .then(result => {
            console.log(result)
            res.redirect("/user")
        })
        .catch(err => {
            console.log("Error in removing ",err)
        })
}


module.exports = {
    del : del,
}