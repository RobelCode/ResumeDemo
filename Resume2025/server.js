// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());

// Serve front-end files
app.use("/", express.static(__dirname));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));

// Contact API route
app.post("/api/contact", (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Email and message required" });
  }

  const entry = {
    email,
    message,
    timestamp: new Date().toISOString()
  };

  fs.appendFile("submissions.jsonl", JSON.stringify(entry) + "\n", err => {
    if (err) return res.status(500).json({ message: "Error saving message" });
  });

  return res.json({ success: true });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
