require('dotenv').config();
const express = require("express");
var cors = require('cors')
const connect = require("./src/config/config");

const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req, res)=> {
    try {
        res.send("Home Page")
    } catch (error) {
        console.log(error)
    }
})

const {userLogger} = require("./src/middlewares/logUser");
const {authUser} = require("./src/middlewares/Auth");

const UserRoutes = require("./src/routes/user.router");
const PostRoutes = require("./src/routes/post.router");

app.use(authUser);
app.use(userLogger);
app.use("/users",UserRoutes);
app.use("/posts",PostRoutes);

const port = process.env.PORT || 3130;

app.listen(port, async () => {
    try {
        await connect();
        console.log(`Listening on port no ${port}`);
    } catch (error) {
        console.log(error)
    }
})