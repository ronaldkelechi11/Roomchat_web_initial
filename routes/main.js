const express = require('express');
const mongoose = require('mongoose');
const Message = require("../providers/message")
const Room = require("../providers/room")
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/main.html")
})

router.post("/createRoom", (req, res) => {
    var newRoomName = req.body.newRoomName

    var room = new Room({
        name: newRoomName
    })

    room.save().then(() => res.redirect("/home/" + newRoomName))
})


module.exports = router