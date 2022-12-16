const express = require('express')
const app = express()
const cors = require("cors")
const { connection } = require("./Config/db")
const { signupRouter } = require("./Routes/signup.route")
const { loginRouter } = require("./Routes/login.route")

const port = process.env.PORT || 5001
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.use("/signup", signupRouter)
app.use("/login", loginRouter)

app.get("/", (req, res) => {
    res.send("Welcome to homepage")
    res.end()
})







app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
        console.log("Not connected");
    }
    console.log(`Listning at PORT ${port}`);
})