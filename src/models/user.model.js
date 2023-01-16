const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type : String, required :true},
    email: {type : String, required : true, unique : true},
    gender: {type : String, required : true},
    password: {type : String, required : true}
}, {
    versionKey: false,
    timestamps: true
});


const Usermodel = mongoose.model("user", userSchema);

module.exports = Usermodel;