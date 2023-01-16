const express = require("express")
var jwt = require('jsonwebtoken');
const Postmodel = require("../models/post.model");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const query = req.query;
        let posts = []

        if(Object.keys(query).length){
            let values = Object.values(query)
            let data = []
            for(i in values){
                data = await Postmodel.find({device : values[i] }).lean().exec()
                if(data.length) {
                    posts.push(data)
                }
            }
        }else{
            posts = await Postmodel.find().lean().exec()
        }

        return res.status(200).send(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})
router.post("/", async (req, res) => {
    try {
        let post = await Postmodel.create(req.body)
        return res.status(200).send(post);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})

router.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const posts = await Postmodel.findByIdAndUpdate({ _id: id }, req.body);
        return res.status(200).send(posts);;
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const posts = await Postmodel.findByIdAndDelete({ _id: id });
        return res.status(200).send(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong");
    }
})

module.exports = router