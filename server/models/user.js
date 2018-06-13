const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    userId : String,
    firstName : String ,
    lastName : String ,
    email : String  ,
    phoneNumber : String ,
    age : Number
});

module.exports = mongoose.model('User' , userSchema)