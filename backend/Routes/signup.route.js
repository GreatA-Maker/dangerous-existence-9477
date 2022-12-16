const express = require("express");
const { } = require("../Models/User.model");
const signupRouter = express.Router();
const { UserModel } = require("../Models/User.model");
const bcrypt = require("bcryptjs")

signupRouter.post("/", async (req, res) => {
    const { email, password } = req.body;

    const checkUser = await UserModel.findOne({ email })
    if (checkUser) {
        res.send({ message: "User already existist" })
    } else {
        try {
            bcrypt.hash(password, 5, async function (err, encryptedPassword) {
                // Store hash in your password DB.
                const user = new UserModel({ email: email, password: encryptedPassword });
                await user.save();
                res.send("Signup successfull");
            });

        } catch (error) {
            console.log(error);
            res.send("Something went wrong");
        }
    }

});

module.exports = { signupRouter };
