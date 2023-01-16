const mongoose = require("mongoose");
require('dotenv').config();

const connect = async()=>{
    try {
    await mongoose.connect(`mongodb+srv://udit:${process.env.SECRET_KEY}@cluster0.n9ur0.mongodb.net/SocialMediaApp?retryWrites=true&w=majority`)
    console.log("Connected to db")
    } catch (error) {
        console.log("Could not conect to db");
    }
}

module.exports = connect;