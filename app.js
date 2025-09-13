const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const connectDB = require("./config/mongoose.connection");

const app = express();

// Connect to database


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routers
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Add a basic route for root
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Add error handling middleware
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("Make sure NODE_ENV is set to development for create endpoint");
});