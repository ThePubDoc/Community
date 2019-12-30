const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;

function form(req,res){
    console.log(req.body);
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

    User.create({
        name,
        gender,
        dob,
        cur_add,
        per_add,
        phone,
        email,
        college,
        branch,
    })
    .then(user => {
        res.redirect("/user")
    })
}

module.exports = {
    form : form,
}