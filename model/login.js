const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const LoginUser = mongoose.Schema({
    user_name: {type: String, require: true, unique: true},
    password : { type: String, require: true} 
});

    LoginUser.plugin(uniqueValidator);

module.exports = mongoose.model("authUser", LoginUser); 