const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Admin = new Schema({
    username: String,
    password: String,
});

Admin.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

module.exports = mongoose.model("Admin", Admin);