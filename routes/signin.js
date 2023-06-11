const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require("../providers/user")

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/signin.html")
})

router.post("/", (req, res) => {
    var nickname = req.body.nickname
    var password = req.body.password

    User.find({ nickname: nickname, password: password })
        .then((response) => {
            if (response == '') {
                res.send("User with that Email and Password does not exist")
            }
            else {
                res.redirect("/main")
            }
        })
        .catch((e) => console.log(e))
})
module.exports = router