const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 8080
const dbUrl = "mongodb://127.0.0.1/roomchat"


//Middleware
app.use(express.static("."))
app.use(express.urlencoded())
app.use(express.json())

//Route
const signup = require("./routes/signup.js")
const signin = require("./routes/signin.js")
const home = require("./routes/home.js")
const main = require("./routes/main.js")

//Assigning routes
app.use("/signup", signup)
app.use("/signin", signin)
app.use("/home", home)
app.use("/main", main)

app.get("/", (req, res) => {
    res.redirect("/signup")
})

app.listen(port, () => {
    console.log("Backend is live on " + port);
    mongoose.connect(dbUrl)
        .then((e) => console.log("DB connected"))
        .catch((e) => console.log("Error connecting to DB"));
})