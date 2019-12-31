const mongoose = require("mongoose")
const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;
const users = require("../database/mongo")


function update(req,res){
    const {
        id,
        name,
        gender,
        dob,
        phone,
        email,
        cur_add,
        per_add,
        college,
        branch
                } = req.body;

    console.log(id)
    users.update({ _id : id } , {
            name,
            gender,
            dob,
            phone,
            email,
            cur_add,
            per_add,
            college,
            branch
        })
        .exec()
        .then(user => {
            console.log("Updated ",user)
            res.redirect("/user")
        })
        .catch(err => {
            console.log("error in updating ", err)
        })
}

module.exports = {
    update : update
}