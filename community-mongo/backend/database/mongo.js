const mongoose = require("mongoose")

const schema = mongoose.Schema

const userSchema = new schema({
    name : {type : String ,required : true},
    gender : {type : String , required : true},
    dob : {type: Date,required: true},
    phone: {type : Number , required:true},
    email: {type : String , required : true},
    cur_add: {type : String , required : true},
    per_add: {type : String , required : true},
    college: {type : String , required : true},
    branch: {type : String , required : true}
})

module.exports = mongoose.model("users" , userSchema);