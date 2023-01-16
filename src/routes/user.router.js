const express = require("express")
var jwt = require('jsonwebtoken');
const Usermodel = require("../models/user.model");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        let user = await Usermodel.find().lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})

router.post("/register", async (req, res) => {
    try {
        const user = await Usermodel.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})

router.post("/login", async (req, res) => {
    try {
        let {email, password} = req.body;
        const user = await Usermodel.find({email});
        
        if(user.length > 0){
            var token = jwt.sign({ password: password }, 'SocialMedia');
            console.log(token)
            res.send({message : "Login Success", name : user[0].name, token : token})
        }else{
            res.send("Wrong Credentials")
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})

module.exports = router