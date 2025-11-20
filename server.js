const express = require("express");
const app = express();

// Serve files from the public folder
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Login page
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

// Signup page
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup.html");
});

// Dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/public/dashboard.html");
});

// Use Render's PORT environment variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
