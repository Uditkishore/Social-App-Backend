const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type : String, required :true},
    body : {type : String, required : true},
    device : {type : String, required : true},
}, {
    versionKey: false,
    timestamps: true
});


const Postmodel = mongoose.model("post", postSchema);

module.exports = Postmodel;