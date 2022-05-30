const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    description: {type: String, require: true},
    customer : { type: String, require: true},
    organization: { type: String, require: true},
    insert_date: {  type: Date, require: true},
    insert_user: {type: String, require: true},
    updated_date: { type: Date, require: true},
    updated_user: { type: String, require: true} 
});

module.exports = mongoose.model("userList", PostSchema); 