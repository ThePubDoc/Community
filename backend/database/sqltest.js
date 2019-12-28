const Sequelize = require('sequelize');
const path = require("path");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,"test.sqlite")
});

const User = sequelize.define('users',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DOB :{
        type: Sequelize.DATE,
        allowNull: false,
    },
    cur_address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    per_address :{
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone:{
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    college:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    branch:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = {
    User : User,
}


sequelize.sync()
.then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
.catch(error => console.log('This error occurred' ,error));
