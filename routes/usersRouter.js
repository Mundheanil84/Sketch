const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner.model.js");

router.get("/", function (req, res) {
    res.send("hey it's working");
});

router.post ("/register", async function (req, res) {
    try {
        let {email, password, fullname} = req.body;
        let user = await userModel.create({
        email,
        password,
        fullname,
    });
    res.send(user);
    
    } catch (error) {
        console.log(error.message);   
    }
});

module.exports = router;
