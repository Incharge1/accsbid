const express = require("express");
const app = express();

// Serve files from the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Use Render's PORT environment variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

