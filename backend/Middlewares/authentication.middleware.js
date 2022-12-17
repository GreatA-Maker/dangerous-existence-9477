const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (token) {
        try {
            var decode = jwt.verify(token, process.env.SECRET_KEY);
            req.body.email = decode.email;
            next();
        } catch (error) {
            res.send({ msg: "Please login again" });
        }
    } else {
        return res.send({ msg: "Please login first" });
    }
};

module.exports = { authentication };

