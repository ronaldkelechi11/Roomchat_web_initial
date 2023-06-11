const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require("../providers/user")

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/signup.html")
})
router.post("/", (req, res) => {
    var email = req.body.email
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var nickname = req.body.nickname
    var password = req.body.password

    var user = new User({
        email: email,
        firstname: firstname,
        lastname: lastname,
        nickname: nickname,
        password: password
    })

    User.find({ email })
        .then((response) => {
            console.log(response);
            if (response == "") {
                user.save().then(() => { res.redirect("/main") })
            }
            else {
                res.send("User with that Email Already Exists")
            }
        })
})
module.exports = router