const express = require("express")
const { } = require("../Models/User.model")
const signupRouter = express.Router()
const { UserModel } = require("../Models/User.model")


signupRouter.post("/", async (req, res) => {

    const { email, password } = req.body

    try {
        const user = new UserModel({ email: email, password: password })
        await user.save()
        res.send("Signup successfull")
    } catch (error) {
        console.log(error);
        res.send("Something went wrong")
    }


})

module.exports = { signupRouter }

