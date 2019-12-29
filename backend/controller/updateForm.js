const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;

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
    console.log("updating",id)
    User.update({
        name,
        gender,
        dob,
        cur_add,
        per_add,
        phone,
        email,
        college,
        branch,
    }, {
        where : {
            id : id
        }
    })
    .then(user => {
        res.redirect("/user");
    })
}

module.exports = {
    update : update
}