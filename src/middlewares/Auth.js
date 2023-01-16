var jwt = require('jsonwebtoken');

const authUser = (req, res, next) =>{
    if(req.method == "POST" && req.url == "/posts" || req.url == "/update/:id" || req.url == "/posts/delete"){
        const token = req.headers.authorization;
        jwt.verify(token, 'SocialMedia', (err, decoded)=>{
            if(err){
                res.send("Invalid token")
            }
        });
    }
    next()
}

module.exports = {
    authUser
}