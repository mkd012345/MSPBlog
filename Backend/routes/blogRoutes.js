// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createBlog, getBlogs, getBlogById } = require("../controllers/blogController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");  // Save images in "uploads/" folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/create", upload.single("image"), createBlog);  // Create blog with image
router.get("/", getBlogs);  // Get all blogs
router.get("/:id", getBlogById);  // Get a blog by ID

module.exports = router;
