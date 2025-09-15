const express = require('express');
const router = express.Router();
const ownerModel = require("../models/product.model"); // Ensure correct model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Test route
router.get("/", (req, res) => {
    res.send("hey it's working");
});

// Register route
router.post("/register", async (req, res) => {
    try {
        let { email, password, fullname } = req.body;

        if (!email || !password || !fullname) {
            return res.status(400).send("All fields are required");
        }

        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Save user with hashed password
        let user = await ownerModel.create({
            email,
            password: hash,
            fullname,
        });

        // Create JWT token
        const token = jwt.sign(
            { email: user.email, id: user._id },
            "Anil", // Secret key (use process.env.JWT_SECRET in production)
            { expiresIn: "1h" }
        );

        return res.status(201).json({
            message: "User registered successfully",
            user,
            token
        });

    } catch (error) {
        console.error("Registration Error:", error.message);
        return res.status(500).json({
            message: "Error registering user",
            error: error.message,
        });
    }
});

module.exports = router;
