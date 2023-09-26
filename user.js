const mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
    name:String,
    gender:String,
    shirt_size:String,
    language:String,
})


let user = mongoose.model("users",usersSchema);

module.exports = user