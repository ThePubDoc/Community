const dbConn = require("../database/sqltest.js"); 
const User = dbConn.User;

function del(req,res){
    const {id} = req.body

    User.destroy({
        where : {
            id : id
        }
    })
    .then(user => {
        res.redirect("/user")
    })
}


module.exports = {
    del : del,
}