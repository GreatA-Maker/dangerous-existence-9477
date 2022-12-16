const express = require("express")
const { UserModel } = require("../Models/User.model")
const loginRouter = express.Router()

loginRouter.post("/", (req, res) => {
    res.send("Welcome to login page")
})

module.exports = { loginRouter }

