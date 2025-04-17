const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// Routes
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require('./routes/blogRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files
app.use("/api/auth", authRoutes);
app.use('/api/blogs', blogRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
