const mongoose = require("mongoose")
const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;
const users = require("../database/mongo")

function form(req,res){
    const {
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
    const user_instance = new users({ name, gender, dob, phone, email, cur_add, per_add, college, branch})
    user_instance.save()
                .then(user => {
                        // console.log("registered....", user);
                        res.redirect("/user")
                    })
                .catch(err => {
                    console.log("error..", err)
                })
}


module.exports = {
    form : form,
}