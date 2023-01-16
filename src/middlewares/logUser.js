const userLogger = (req, res, next) =>{
    if(req.method == "POST" && req.url == "/users/register"){
        if(!req.body.name) res.status(400).send("Name is requried")
        if(!req.body.email) res.status(400).send("Email is requried")
        if(!req.body.gender) res.status(400).send("Gender is requried")
        if(!req.body.password) res.status(400).send("Password is requried")
    }
    next()
}

module.exports = {
    userLogger
}