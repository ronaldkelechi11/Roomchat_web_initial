const express = require('express');
const router = express.Router();
const Message = require("../providers/message")


router.get("/:roomname", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/home.html");
})

router.get("/:roomname/api", (req, res) => {
    Message.find({}).then((response) => res.send(response)).catch((e) => console.log(e))
})

router.post("/:roomname", (req, res) => {
    var message = req.body.message
    var nickname = req.body.nickname
    var roomname = req.body.roomname

    var message = new Message({
        nickname: nickname,
        message: message,
        roomname: roomname
    })

    message.save().then(() => res.redirect("/home/:roomname"))
})

module.exports = router
