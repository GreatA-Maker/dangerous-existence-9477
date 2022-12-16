const express = require("express");
const productsRouter = express.Router();
const { authentication } = require('../Middlewares/authentication.middleware')

productsRouter.get('/', authentication, async (req, res) => {
    let data = await { "name": "Product-1" }
    res.send(data)
})

module.exports = { productsRouter }