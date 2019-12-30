const mongoose = require("mongoose")
const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;
const mongo = require("../database/mongo")

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
    const user_instance = new mongo({ name, gender, dob, phone, email, cur_add, per_add, college, branch})
    user_instance.save()
                .then(result => {
                        console.log("mongo....", result);
                        res.redirect("/user")
                    })
                .catch(err => {
                    console.log("error..", err)
                })
}


module.exports = {
    form : form,
}