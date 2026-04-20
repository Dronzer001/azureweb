const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Test API
app.get("/api", (req, res) => {
  res.send("API is working 🚀");
});

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// IMPORTANT: Azure uses process.env.PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {   
  console.log(`Server running on port ${PORT}`);
});
